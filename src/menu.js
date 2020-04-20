import React, { useContext, useState } from 'react';
import { useShortcuts } from './util';
import { motion, AnimatePresence } from 'framer-motion';
import { ColorContext } from './colorscheme';
import { ChromePicker } from 'react-color';
import { SceneContext, BACKDROPS, DRESSINGS, OBJECTS } from './scene';


function LabeledRow({ children }) {
  return (
    <div className="columns">
      <div key="label" className="column is-narrow side-menu-column">
        {children[0]}
      </div>
      {children.slice(1).map((child, i) =>
        <div key={i} className="column side-menu-column">{child}</div>
      )}
    </div>
  );
}

function ColorSelector({ group, keys, selection, onSelect }) {
  const [ colors ] = useContext(ColorContext);
  return (
    <div className="buttons">
      {keys.map((key, i) => {
        const isSelected = (selection !== null && selection.group === group && selection.key === key);
        return <button
          key={i}
          className={`button is-rounded is-small swatch${isSelected ? ' is-active' : ''}`}
          style={{backgroundColor: colors[group][key]}}
          onClick={(e) => { e.stopPropagation(); onSelect({group, key}); }} />
      })}
    </div>
  );
}


function ShowButtons() {
  const [ { showCharacter, showBackground }, dispatch ] = useContext(SceneContext);
  const toggleBackground = () => dispatch({type: 'SHOW_BACKGROUND', value: !showBackground})
  const toggleCharacter = () => dispatch({type: 'SHOW_CHARACTER', value: !showCharacter})
  useShortcuts([
    {key: 'KeyZ', fn: toggleBackground},
    {key: 'KeyX', fn: toggleCharacter},
    {key: 'Space', fn: () => { toggleBackground(); toggleCharacter(); }},
  ]);
  return (
    <div className="buttons has-addons is-centered">
      <button
        className={`button is-rounded${showBackground ? ' is-dark' : ' is-light'}`}
        onClick={toggleBackground}>
        <i className="fas fa-image" /><strong>&nbsp;(z)</strong>
      </button>
      <button
        className={`button is-rounded${showCharacter ? ' is-dark' : ' is-light'}`}
        onClick={toggleCharacter}>
        <i className="fas fa-female" /><strong>&nbsp;(x)</strong>
      </button>
    </div>
  );
}


function ScenerySelector({ options, index, colorSelection, onScenerySelect, onColorSelect }) {
  return (
    <LabeledRow>
      <div className="buttons has-addons is-centered">
        {options.map(({ icon }, i) => 
          <button
            key={i}
            className={`button is-rounded ${(index === i) ? 'is-dark' : 'is-light'}`}
            onClick={() => onScenerySelect(i)}>
            {icon}
          </button>
        )}
      </div>
      <ColorSelector {...options[index].colors} selection={colorSelection} onSelect={onColorSelect} />
    </LabeledRow>
  );
}


function Slider({ icon, value, min, max, step, onChange }) {
  return (
    <LabeledRow>
      {icon}
      <input type="range" className="slider is-circle is-fullwidth pad-right-1" {...{ value, min, max, step, onChange }} />
    </LabeledRow>
  );
}


export default function Menu() {
  const [ scene, sceneDispatch ] = useContext(SceneContext);
  const [ colors, colorDispatch ] = useContext(ColorContext);
  const [ collapsed, setCollapsed ] = useState(true);
  const [ selection, setSelection ] = useState(null);
  const menuWidth = 350;
  const variants = {
    hide: {x: -menuWidth},
    show: {x: 0},
  }
  const handleVariants = {
    hide: {opacity: 0, transition: {ease: 'linear', duration: 0.2, delay: 2}},
    show: {opacity: 1, transition: {ease: 'linear', duration: 0.2}},
  }
  function toggleCollapse() {
    setCollapsed(!collapsed);
    setSelection(null);
  }
  function setGB() {
    colorDispatch({type: 'CHANGE_COLOR', value: {group: 'backgroundColors', key: 'BACKGROUND', color: '#00ff00'}});
    colorDispatch({type: 'CHANGE_COLOR', value: {group: 'objectColors', key: 'PAPER_GB', color: '#00ff00'}});
  }
  return (
    <React.Fragment>
      {!collapsed && <div className="side-menu-close-target" onClick={toggleCollapse} />}
      <motion.div
        initial="hide"
        animate={collapsed ? "hide" : "show"}
        variants={variants}
        transition={{ease: 'linear', duration: 0.2}}
        style={{width: menuWidth}}
        onClick={() => setSelection(null)}
        className="side-menu">

        <AnimatePresence>
        { (selection !== null) &&
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} onClick={(e) => e.stopPropagation()} className="side-menu-color-picker">
            <ChromePicker
              disableAlpha
              color={colors[selection.group][selection.key]}
              onChange={(color) => colorDispatch({type: 'CHANGE_COLOR', value: {...selection, color: color.hex}})} />
          </motion.div>}
        </AnimatePresence>

        <ShowButtons />

        <LabeledRow>
          <button
            className="button is-rounded is-light"
            onClick={setGB}>
            <strong>GB</strong>
          </button>
          <ColorSelector group="backgroundColors" keys={['BACKGROUND']} selection={selection} onSelect={setSelection} />
        </LabeledRow>

        <ScenerySelector
          options={BACKDROPS}
          index={scene.backdropIndex}
          colorSelection={selection}
          onScenerySelect={(i) => sceneDispatch({type: 'SET_BACKDROP', value: i})}
          onColorSelect={setSelection} />

        <ScenerySelector
          options={DRESSINGS}
          index={scene.dressingIndex}
          colorSelection={selection}
          onScenerySelect={(i) => sceneDispatch({type: 'SET_DRESSING', value: i})}
          onColorSelect={setSelection} />
        
        <ScenerySelector
          options={OBJECTS}
          index={scene.objectIndex}
          colorSelection={selection}
          onScenerySelect={(i) => sceneDispatch({type: 'SET_OBJECT', value: i})}
          onColorSelect={setSelection} />

        <Slider
          icon={<i className="fas fa-clock pad-left-1" />}
          value={scene.rate} min={1} max={6} step={0.1}
          onChange={(e) => sceneDispatch({type: 'SET_RATE', value: parseFloat(e.target.value)})} />

        <Slider
          icon={<i className="fas fa-arrows-alt-h pad-left-1" />}
          value={scene.swing} min={0} max={9} step={0.1}
          onChange={(e) => sceneDispatch({type: 'SET_SWING', value: parseFloat(e.target.value)})} />

        <Slider
          icon={<i className="fas fa-arrows-alt-v pad-left-1" style={{margin: '0 4px'}} />}
          value={scene.bob} min={0} max={60} step={1}
          onChange={(e) => sceneDispatch({type: 'SET_BOB', value: parseFloat(e.target.value)})} />

        <div className="buttons has-addons is-centered">
          <button
            className="button is-rounded is-light"
            onClick={() => colorDispatch({type: 'RESET'})}>
            <i className="fas fa-times" />&nbsp;<i className="fas fa-palette" />
          </button>
          <button
            className="button is-rounded is-light"
            onClick={() => sceneDispatch({type: 'RESET'})}>
            <i className="fas fa-times" />&nbsp;<i className="fas fa-arrows-alt" />
          </button>
        </div>

        <motion.div
          className="side-menu-handle" onClick={toggleCollapse}
          initial="show"
          animate={collapsed ? "hide" : "show"}
          whileHover="show"
          variants={handleVariants}>
          <i className={`fas fa-chevron-${collapsed ? 'right' : 'left'}`} style={collapsed ? null : {marginLeft: '-0.5em'}} />
        </motion.div>

      </motion.div>
    </React.Fragment>
  );
}

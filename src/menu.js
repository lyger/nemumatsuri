import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ColorContext } from './colorscheme';
import { ChromePicker } from 'react-color';
import { SceneContext, BACKDROPS, DRESSINGS, OBJECTS, SPECIALS } from './scene';
import { LabeledRow, ColorSelector, ShowButtons, Slider, ScenerySelector } from './menu/ui';
import BGMFooter from './menu/bgm';


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

        <div className="side-menu-content">

          <AnimatePresence>
          { (selection !== null) &&
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{ease: 'easeInOut', duration: 0.2}}
              onClick={(e) => e.stopPropagation()}
              className="side-menu-color-picker">
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

          <ScenerySelector
            options={SPECIALS}
            index={scene.specialIndex}
            colorSelection={selection}
            onScenerySelect={(i) => sceneDispatch({type: 'SET_SPECIAL', value: i})}
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

        </div>
        <BGMFooter collapsed={collapsed}>
          <p className="has-text-centered">
            <a href="https://github.com/lyger/nemumatsuri" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" />&nbsp;GitHub</a>
          </p>
        </BGMFooter>
      </motion.div>
    </React.Fragment>
  );
}

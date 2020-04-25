import React, { useContext } from 'react';
import { useShortcuts } from '../util';
import { ColorContext } from '../colorscheme';
import { SceneContext } from '../scene';


export function LabeledRow({ children }) {
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

export function ColorSelector({ group, keys, selection, onSelect }) {
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


export function ShowButtons() {
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


export function ScenerySelector({ options, index, colorSelection, onScenerySelect, onColorSelect }) {
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


export function Slider({ icon, value, min, max, step, onChange }) {
  return (
    <LabeledRow>
      {icon}
      <input type="range" className="slider is-circle is-fullwidth pad-right-1" {...{ value, min, max, step, onChange }} />
    </LabeledRow>
  );
}

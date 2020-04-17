import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { ColorContext } from './colorscheme';
import { ChromePicker } from 'react-color';


export default function Menu() {
  const [ colors, dispatch ] = useContext(ColorContext);
  const [ selected, setSelected ] = useState(null);
  return (
    <motion.div
      initial={{opacity: 0}}
      whileHover={{opacity: 1}}
      transition={{ease: 'linear', duration: 0.5}}
      className="side-menu">
      { (selected !== null) &&
        <div>
          <h2>{selected.key}</h2>
          <ChromePicker
            color={colors[selected.group][selected.key]}
            onChangeComplete={(color) => dispatch({type: 'CHANGE_COLOR', value: {...selected, color: color.hex}})} />
        </div>}
      {Object.keys(colors).map(
        (group, i) => 
        <div>
          <h2>{group}</h2>
          {Object.keys(colors[group]).map((key, j) => 
              <span
                key={`${i}:${j}`}
                title={key} alt={key}
                className={`swatch${(selected !== null && selected.group === group && selected.key === key) ? ' selected' : ''}`}
                style={{backgroundColor: colors[group][key]}}
                onClick={() => setSelected({group, key})} />
          )}
        </div>
      )}
      <button onClick={() => console.log(JSON.stringify(colors))}>Output to console</button>
    </motion.div>
  );
}
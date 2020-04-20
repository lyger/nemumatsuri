import React, { useContext } from 'react';
import { ColorContext } from '../../../colorscheme';


function OpenEnvelope({ scale, filter, children }) {
  const [ { objectColors } ] = useContext(ColorContext);
  const gProps = {
    transform: `scale(${scale || 1})`,
  }
  if (filter !== undefined) gProps['filter'] = `url(#${filter})`;
  return (
    <g {...gProps}>
      <path
        d="m 0,150 v -158 q 0,-7 5.065,-10.131 l 106.154,-65.608 q 10.130,-6.261 20.261,0 l 106.154,65.608 q 5.065,3.131 5.065,10.131 v 158 Z"
        style={{fill: objectColors.ENVELOPE_FLAP}} />
      {children}
      <path
        d="m 0,5 q 10,0 15.065,3.131 l 76.285,47.148 60,0 76.285,-47.148 q 5.065,-3.131 15.065,-3.131 v 145 h -242.7 Z"
        style={{fill: objectColors.ENVELOPE_BODY}} />
    </g>
  );
}


function ClosedEnvelope({ scale, filter }) {
  const [ { objectColors } ] = useContext(ColorContext);
  const gProps = {
    transform: `scale(${scale || 1})`,
  }
  if (filter !== undefined) gProps['filter'] = `url(#${filter})`;
  return (
    <g {...gProps}>
      <rect x="0" y="0" width="242.7" height="150" style={{fill: objectColors.ENVELOPE_BODY}} />
      <path
        d="m 0,0 v 8 q 0,7 5.065,10.131 l 106.154,65.608 q 10.130,6.261 20.261,0 l 106.154,-65.608 q 5.065,-3.131 5.065,-10.131 v -8 Z"
        style={{fill: objectColors.ENVELOPE_FLAP}} />
    </g>
  );
}


export default function Envelope({ scale, filter, open, children }) {
  return (
    open
    ? <OpenEnvelope {...{scale, filter}}>{children}</OpenEnvelope>
    : <ClosedEnvelope {...{scale, filter}} />
  );
}

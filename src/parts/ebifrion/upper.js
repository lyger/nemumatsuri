import React, { useContext } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ColorContext } from '../../colorscheme';


export default function Upper() {
  const [ { ebifrionColors } ] = useContext(ColorContext);
  const mouthControl = useAnimation();
  return (
    <g style={{transform: 'translate(15px, 20px)'}}>
      
      <defs>

        <path
          id="ebifrion_mane"
          d="m 719.25001,773.24998 c 0,0 9.74999,18.74999 25.49999,24.00001 15.75,5.24999 37.99981,3.85829 50.99998-11.25 13.875-16.12502 11.625-27.75002 11.625-27.75002 0,0 11.99999,13.87502 37.12499,11.62502 25.12502-2.25 37.87503-23.24999 40.12503-40.125 2.25-16.87499 -4.00737-30.8787 -4.00737-30.8787 0,0 18.98402-1.3388 34.34468-14.99998 16.125-14.34101 21.27297-36.59465 11.18565-58.15162 -8.24326-17.61619 -23.76927-25.125 -23.76927-25.125 0,0 15.15455-7.98491 18.55698-29.25003 2.99999-18.74999 -2.15904-39.15533 -19.40902-50.03033 -18.88739-11.90727 -36.90536-7.43562 -36.90536-7.43562 0,0 9.0942-15.37523 -2.25-37.93938 -9.91667-19.72474 -28.37132-28.93935 -51.62131-26.31433 -23.24999,2.625 -31.59099,18.93197 -31.59099,18.93197 0,0 -0.85462-19.77874 -27.65903-30.557 -23.0078-9.2516 -47.00367,1.71969 -56.75369,16.71968 -9.41434,14.48362 -8.06797,27.74999 -8.06797,27.74999 0,0 -19.6592-8.95292 -38.83365-5.87129 -21.00002,3.37499 -37.03399,20.99999 -37.78398,43.87501 -0.6514,19.86783 9.40161,32.1213 9.40161,32.1213 0,0 -20.57423,1.9025 -35.01927,19.74634 -12.75001,15.74997 -14.25002,39.19297 -0.74999,56.44298 11.28447,14.41908 23.43197,17.716 23.43197,17.716 0,0 -10.875,4.125 -15.75003,25.87499 -4.875,21.75001 5.62501,43.50005 24.00001,51.00004 18.375,7.49999 29.25,2.99999 29.25,2.99999 0,0 -9.3903,17.34758 -2.625,36.375 6.00001,16.87499 20.25,27.375 44.25001,27 24.00001-0.375 33.00001-16.50002 33.00001-16.50002 0,0 0,0 0,0"
          style={{fill: ebifrionColors.MANE}} />
        <path
          id="ebifrion_face"
          d="m 861.25428,639.0652 c -12.6798,66.01224 -74.95665,109.53785 -139.09927,97.21718 -64.14259-12.32067 -105.86146-75.82204 -93.18166-141.83427 6.08905-31.70018 24.1649-59.75167 50.25107-77.98343 26.08617-18.23176 58.04583-25.15034 88.8482-19.23375 30.80237,5.91659 57.92428,24.18372 75.39925,50.78279 17.47494,26.5991 23.87146,59.3513 17.78241,91.05148 0,0 0,0 0,0"
          style={{fill: ebifrionColors.SKIN}} />

        <clipPath id="ebifrion_mane_clip">
          <use href="#ebifrion_mane" />
        </clipPath>
        <clipPath id="ebifrion_face_clip">
          <use href="#ebifrion_face" />
        </clipPath>

      </defs>

      <use href="#ebifrion_mane" />
      <path
        id="ebifrion_mane_shadow"
        clipPath="url(#ebifrion_mane_clip)"
        d="m 653.82163,715.86079 c 0,0 -15.65918,38.46626 11.40987,52.85103 25.97698,13.8045 49.85104-11.66726 49.85104-11.66726 0,0 18.89751,25.94769 48.44205,19.20951 30.2288-6.89426 34.28946-34.58906 34.28946-34.58906 0,0 33.40604,14.09343 56.83629-7.46235 26.51644-24.39516 7.57993-55.86661 7.57993-55.86661 0,0 36.00794,2.65484 46.04777-27.17549 11.4584-34.04551 -19.77755-55.86667 -19.77755-55.86667 0,0 14.74537,0.05669 27.57713-24.92552 7.89256-15.36599 -1.06061-33.94111 -1.06061-33.94111 0,0 109.77831,127.27922 25.98613,224.32961 -83.79215,97.05044 -190.38847,137.88584 -284.78724,67.35195 -94.39877-70.53389 -62.04864-125.88126 -62.04864-125.88126 0,0 8.27751,14.33455 24.89888,16.78859 19.74404,2.91506 34.75548-3.15536 34.75548-3.15536 0,0 0,0 0,0"
        style={{fill: ebifrionColors.MANE_SHADOW}} />
      <use href="#ebifrion_face" />
      <path
        id="ebifrion_ears"
        d="m 662.13133,503.06102 c -13.99158-0.16469 -23.83875,9.9678 -23.29101,24.06444 0.50094,12.89378 9.43654,21.73535 9.43654,21.73535 0,0 36.23437-35.46386 36.23437-35.46386 0,0 -6.24526-9.42168 -21.0132-10.28758 -0.45975-0.02551 -0.91534-0.04309 -1.3667-0.04819 0,0 0-0.00006 0-0.00006 m 192.93151,28.19974 c -12.79987-2.11133 -23.57257,4.63595 -23.57257,4.63595 0,0 27.31161,45.87364 27.31161,45.87364 0,0 12.39165-9.98561 15.37974-22.53835 2.95055-13.78854 -5.56659-25.71503 -19.11878-27.97123 0,0 0,0 0,0"
        style={{fill: ebifrionColors.SKIN}} />
      <path
        id="ebifrion_face_shadow"
        clipPath="url(#ebifrion_face_clip)"
        d="m 637.124,674.84341 c 0,0 30.75914,36.06245 77.42818,39.24445 46.6691,3.18197 88.56513-20.15257 112.42996-58.33636 23.86485-38.18375 21.21324-95.98972 0.53036-127.80952 -20.68282-31.8198 20.15257-36.59278 20.15257-36.59278 0,0 51.44204,127.80955 51.44204,127.80955 0,0 -61.5183,123.03658 -61.5183,123.03658 0,0 -158.56872,21.74355 -158.56872,21.74355 0,0 -41.89609-89.09546 -41.89609-89.09546"
        style={{fill: ebifrionColors.SKIN_SHADOW}} />
      <motion.g
        animate={mouthControl}
        onMouseOver={() => mouthControl.start({y: 0, transition: {type: 'spring', velocity: -70, stiffness: 180, damping: 5}})}>
        <path
          id="ebifrion_mouth"
          d="m 699.60203,628.46923 c -0.2571,0.00283 -0.52002,0.01417 -0.78953,0.0309 -8.625,0.56251 -20.43748,8.625 -20.81251,20.625 -0.375,12.00002 11.06252,19.12501 20.43751,16.125 5.33869-1.70838 7.99761-5.05806 9.3706-8.49172 0.43081,4.37213 2.24997,9.47812 8.71727,12.49807 8.91884,4.16472 21.16704-1.45264 22.31685-13.40334 1.1499-11.95064 -9.54522-21.44585 -18.02925-23.09763 -6.64713-1.29416 -9.9917,2.66743 -11.14308,4.45898 0.00232-0.55196 0.01701-1.96435 0.01701-1.96435 0,0 -2.11207-6.86324 -10.08547-6.78076 0,0 0,0 0,0"
          style={{fill: ebifrionColors.MOUTH}} />
        <path
          id="ebifrion_nose"
          d="m 710.625,637.125 c 0,0 -6.375-3.5625 -6.56252-6.375 -0.18737-2.81251 3.37501-2.99999 7.31254-2.81248 3.93749,0.18737 7.16828,1.51489 6.37498,3.74998 -1.02722,2.89417 -7.125,5.4375 -7.125,5.4375 0,0 0,0 0,0"
          style={{fill: ebifrionColors.FEATURES}} />
      </motion.g>
      <path
        id="ebifrion_eyes"
        d="m 682.85449,605.57372 c 0,0 -11.89012-0.30064 -25.94387,3.14649 -14.05375,3.44713 -22.33885,9.10253 -22.33885,9.10253 0,0 -0.61203,2.67361 0.10998,6.86282 0.82755,4.80515 2.16797,7.66993 2.16797,7.6699 0,0 4.50711-3.18118 20.41699-7.42382 15.9099-4.24264 25.72118-4.24363 25.72118-4.24363 0,0 0.42041-3.71146 0.42041-7.9541 0.05556-2.67398 -0.1148-4.53025 -0.55369-7.16017 0,0 0,0 0,0 m 64.3447,6.74416 c -1.07527,2.94574 -3.64776,8.3325 -4.29194,14.11084 0,0 6.73072,1.29419 20.88425,9.34129 14.15347,8.04708 24.16847,17.16945 24.16847,17.16945 0,0 2.81256-3.10192 4.95111-6.31641 2.31511-3.47975 4.22612-8.19873 4.22612-8.19873 0,0 -9.65027-8.36768 -24.55373-16.42382 -14.90349-8.05618 -25.38428-9.68261 -25.38428-9.68261 0,0 0,0 0,0"
        style={{fill: ebifrionColors.FEATURES}} />
      <path
        id="ebifrion_blush"
        d="m 640.17771,634.86621 c -5.70688,0.05783 -9.85144,2.12145 -10.9995,5.47705 -1.8614,5.44402 4.57951,12.60045 14.38625,15.98437 9.80649,3.38391 19.26541,1.7142 21.12744-3.72949 1.8614-5.44402 -4.57951-12.60045 -14.38625-15.98437 -3.40149-1.17363 -6.91685-1.78019 -10.12793-1.74756 0,0 0,0 0,0 m 136.20847,19.43847 c -10.55497-0.23074 -19.01197,4.1112 -19.36956,9.94482 -0.37536,6.13933 8.3262,11.66672 19.43549,12.3457 11.10841,0.67864 20.41764-3.7474 20.79346-9.88622 0.37536-6.13933 -8.3262-11.66669 -19.43549-12.3457 -0.47455-0.02891 -0.94944-0.04847 -1.4239-0.05868 0,0 0-0.00003 0-0.00003"
        style={{fill: ebifrionColors.BLUSH}} />
    
    </g>
  );
}
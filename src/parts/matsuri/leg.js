import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ColorContext } from '../../colorscheme';

export default function Leg({ rate, swing }) {
  const [{ matsuriColors } ] = useContext(ColorContext);
  const legSwing = swing * 0.6;
  return (
    <motion.g
      animate={{rotate: [legSwing, -legSwing, legSwing]}}
      transition={{ease: 'easeInOut', duration: rate * 1.7, loop: Infinity}}
      style={{originX: '1110px', originY: '485px'}}>

      <defs>

        <path
          id="skin_leg"
          d="m 1056.6678,520.056 c 0,0 1.2874,18.78452 5.7853,44.22138 4.498,25.43683 7.9451,41.38206 12.4335,47.39661 4.4884,6.01455 17.6298,13.70812 42.2876,22.31198 24.6578,8.6038 58.9861,11.88476 58.9861,11.88476 0,0 11.0792,-4.37508 14.3439,-13.15928 3.2646,-8.78417 -5.7279,-30.65652 -5.7279,-30.65652 0,0 -15.3013,-4.85433 -30.6006,-12.90166 -15.2993,-8.04736 -25.5995,-16.77413 -26.2133,-20.98049 -0.6141,-4.20636 1.6039,-28.8682 4.6322,-46.9453 3.0284,-18.0771 7.376,-33.07048 5.0754,-51.23906 -2.3005,-18.1686 -10.4627,-29.99894 -18.9588,-36.21424 -8.496,-6.21527 -29.7184,-15.10316 -47.297,-5.66748 -17.5785,9.43571 -14.7464,91.9493 -14.7464,91.9493 0,0 0,0 0,0"
          style={{fill: matsuriColors.SKIN}} />
        <path
          id="yellow_sock"
          d="m 1154.8724,586.79436 c 0,0 8.1543,7.60385 8.473,20.55917 0.3188,12.95529 -2.5686,23.54176 -11.5887,30.49625 -9.02,6.95449 -14.9533,8.00955 -14.9533,8.00955 0,0 1.2898,4.22059 3.2666,5.37412 1.9767,1.1535 7.3271,-1.13372 14.2348,-2.12117 6.9948,-0.99986 16.9231,1.33503 19.4772,2.93888 2.2059,1.38523 4.6478,10.30887 7.3243,13.09782 2.6764,2.78889 6.6904,8.10116 16.2218,5.05531 9.5314,-3.04583 14.2058,-7.94772 15.4858,-12.9452 1.28,-4.99748 -1.4666,-20.00968 -4.6345,-33.29382 -3.168,-13.28409 -8.5798,-24.12499 -13.6082,-25.77872 -5.0284,-1.65373 -8.7808,-0.0377 -14.0596,-1.65949 -6.9304,-1.38824 -11.7863,-1.47121 -14.1045,-4.47789 -2.3181,-3.00671 -3.2959,-8.00563 -6.5035,-8.11667 -3.2075,-0.11112 -5.0312,2.86186 -5.0312,2.86186 0,0 0,0 0,0"
          style={{fill: matsuriColors.YELLOW}} />

        <clipPath id="skin_leg_clip">
          <use href="#skin_leg" />
        </clipPath>
        <clipPath id="yellow_sock_clip">
          <use href="#yellow_sock" />
        </clipPath>

      </defs>

      <path
        id="yellow_sock_back"
        d="m 1140.9926,651.43701 c 0,0 -8.2103,0.39903 -13.4676,-8.57322 -5.2573,-8.97228 6.527,-53.03078 18.7377,-57.80327 12.2107,-4.77252 14.7775,-1.03397 14.7775,-1.03397 0,0 12.9916,16.04645 6.0184,36.37774 -6.9732,20.33133 -26.066,31.0326 -26.066,31.0326 0,0 0,1.1e-4 0,1.1e-4"
        style={{fill: matsuriColors.YELLOW_SHADOW}} />
      <use href="#skin_leg" />
      <path
        id="skin_leg_shadow"
        clipPath="url(#skin_leg_clip)"
        d="m 1043.3027,520.08985 c 0,0 22.9993,70.30239 22.5132,60.23435 -0.932,-19.30377 0.1503,-33.33124 12.857,-49.94529 11.5504,-15.10211 29.4994,-17.19235 40.7871,-28.44142 11.2877,-11.24906 -9.6724,-18.36034 -9.6724,-18.36034 0,0 -66.4849,36.5127 -66.4849,36.5127 m 96.3223,31.53515 c 0,0 12.0832,26.625 16.5644,39.37499 4.3164,12.28102 6.246,26.22336 -9.6782,36.85986 -15.9005,10.62068 -34.579,4.2539 -34.579,4.2539 0,0 15.8861,20.63234 15.8861,20.63234 0,0 28.3067,-5.49609 40.6817,-23.1211 12.375,-17.625 4.125,-41.62499 4.125,-41.62499 0,0 -33,-36.375 -33,-36.375"
        style={{fill: matsuriColors.SKIN_SHADOW}} />
      <use href="#yellow_sock" />
      <path
        id="yellow_sock_shadow"
        clipPath="url(#yellow_sock_clip)"
        d="m 1141.5622,651.64861 c 0,0 6.2967,0.97432 15.5992,-5.36219 6.2659,-4.26798 7.344,-7.63957 8.887,-9.26969 2.5095,-2.65181 6.2368,9.18283 2.8979,17.08038 -3.3591,7.94588 7.4622,4.07075 10.3791,8.57854 2.9168,4.5078 14.4651,2.40885 21.0979,-1.72468 9.2709,-5.77814 11.8736,-12.74681 10.5156,-22.22059 -0.8727,-6.08825 4.114,-12.20862 4.114,-12.20862 0,0 12.5357,40.0409 12.5357,40.0409 0,0 -51.3165,15.69022 -51.3165,15.69022 0,0 -34.7099,-30.60428 -34.7099,-30.60428"
        style={{fill: matsuriColors.YELLOW_SHADOW}} />

    </motion.g>
  );
}
import React, { useContext } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ColorContext } from '../../colorscheme';

export default function Body({ children }) {
  const bellyControl = useAnimation();
  const [ { matsuriColors } ] = useContext(ColorContext);

  return (
    <g>

      <defs>

        <path
          id="skin_torso"
          d="m 923.42418,430.16267 c 0,0 29.78413,5.91673 54.42046,2.07584 25.17046,-3.92417 33.53036,-15.7422 53.03036,-14.99219 19.5,0.74999 16.8504,3.84077 30,4.62866 23.2012,1.39017 40.5,19.875 40.875,45.375 0.375,25.50002 -14.2349,50.2683 -51.5115,61.68359 -39.4689,12.08665 -99.22423,3.69833 -129.59924,-2.67667 -30.37499,-6.375 -66.38927,-20.3819 -70.13925,-37.25691 -3.75001,-16.87499 -4.5,-34.49999 13.12498,-44.625 17.625,-10.12499 59.7992,-14.21232 59.7992,-14.21232 0,0 0,0 0,0"
          style={{fill: matsuriColors.SKIN}} />
        <path
          id="yellow_torso"
          d="m 874.51432,511.48616 c 0,0 6.89428,12.7279 32.61523,23.33452 25.72104,10.60659 71.85977,6.36395 91.74713,3.44716 19.88742,-2.91682 39.50962,-31.55465 40.03992,-47.19937 0.5303,-15.64475 -11.137,-41.1006 -29.6985,-43.22191 -18.56152,-2.12134 -3.4471,33.41078 -14.84922,45.87355 -11.40211,12.46275 -19.88739,11.66726 -37.91866,16.17506 -18.03121,4.50782 -27.0468,6.89431 -27.0468,6.89431 0,0 -8.22016,-5.83364 -27.31201,-8.22013 -19.09185,-2.38649 -27.57711,2.91682 -27.57711,2.91682 0,0 0,0 0,0 m 122.29826,-84.03069 c 0,0 6.79554,-11.20453 25.17054,-13.07954 18.375,-1.87498 30.3749,5.62501 39.3749,6.00001 9,0.375 18.375,-4.125 36,-1.50001 17.625,2.62502 27,14.62501 29.25,20.62502 2.25,5.99998 1.875,15.37498 1.875,15.37498 0,0 -22.125,14.62501 -22.125,17.625 0,3.00002 6.75,7.49999 10.875,15.375 4.125,7.87499 5.6251,17.25001 5.6251,17.25001 0,0 -6.0001,3.74998 -14.2501,5.62499 -8.2499,1.875 -18.9369,2.72489 -18.9369,2.72489 0,0 -1.5909,0.79549 -4.9055,2.51906 -3.3145,1.72358 -9.4133,4.11007 -9.4133,4.11007 0,0 23.0693,-19.62221 19.7548,-41.76349 -3.3146,-22.1413 -11.9325,-34.73663 -25.0581,-37.78603 -13.1257,-3.0494 -31.2181,-2.24694 -43.4871,-6.89428 -17.5009,-6.62913 -29.74934,-6.20569 -29.74934,-6.20569 0,0 0,0 0,0"
          style={{fill: matsuriColors.YELLOW}} />

        <clipPath id="skin_torso_clip">
          <use href="#skin_torso" />
        </clipPath>
        
        <clipPath id="yellow_torso_clip">
          <use href="#yellow_torso" />
        </clipPath>

      </defs>

      <motion.g
        animate={bellyControl}
        style={{scaleY: 1}}
        onClick={() => bellyControl.start({scaleY: 1, transition: {type: 'spring', velocity: -2, stiffness: 150, damping: 3, mass: 0.5}})}>
        <use href="#skin_torso" />
        <path
          id="skin_torso_shadow"
          clipPath="url(#skin_torso_clip)"
          d="m 1094.4914,486.04912 c 0,0 -7.2701,11.19461 -25.9218,18.53493 -19.0755,7.50713 -44.9415,2.05696 -44.9415,2.05696 0,0 -14.41,43.02887 -14.41,43.02887 0,0 80.3451,-27.0468 80.3451,-27.0468 0,0 4.9282,-36.57396 4.9282,-36.57396"
          style={{fill: matsuriColors.SKIN_SHADOW}} />
      </motion.g>

      <use href="#yellow_torso" />
      <path
        id="yellow_torso_shadow"
        clipPath="url(#yellow_torso_clip)"
        d="m 1047.4921,423.07617 c 0,0 1.5919,2.6513 6.0997,3.18163 4.5079,0.53033 10.0767,-1.32568 10.0767,-1.32568 0,0 -16.1763,-1.85596 -16.1763,-1.85596 m -1.1251,4.11035 c 0,0 0.3982,1.19307 3.315,1.5908 2.9169,0.39779 5.3042,-0.26504 5.3042,-0.26504 0,0 -2.52,-0.79534 -4.7739,-1.06053 -2.2539,-0.26504 -3.8453,-0.26504 -3.8453,-0.26504 0,0 0,0 0,0 m 81.4454,58.43846 c 0,0 -2.1976,3.21143 -8.0625,6.18752 -5.7656,2.92567 -9.75,2.06249 -9.75,2.06249 0,0 -0.6989,-2.2699 -1.875,-3.93749 -1.761,-2.49707 -2.25,-2.81251 -3.5625,-3.37501 -0.082,-0.0352 -0.1545,-0.0442 -0.2197,-0.0292 -0.9798,0.22167 -0.3428,5.91211 -5.9677,12.59181 -5.0568,6.00486 -13.3126,10.875 -13.3126,10.875 0,0 -12.3749,11.81248 -12.3749,11.81248 0,0 52.3125,-12.56247 52.3125,-12.56247 0,0 2.8124,-23.62499 2.8124,-23.62499 m -91.286,16.62891 c 0,0 -8.4929,14.1186 -39.26819,15.34864 -32.5671,1.30161 -34.60836,-4.40921 -34.60836,-4.40921 0,0 -62.64989,14.43163 -56.64991,24.18163 6.00001,9.74999 34.87501,14.62501 78.00001,9.74999 43.12505,-4.87497 52.52645,-44.87105 52.52645,-44.87105 0,0 0,0 0,0"
        style={{fill: matsuriColors.YELLOW_SHADOW}} />
      <path
        id="black_bottom"
        d="m 954.609,543.52706 c -1.70484,-0.68349 -4.07234,-0.15959 -9.04317,0.11339 -3.73448,0.20523 -6.14631,-0.37715 -6.14631,-3.00728 0,-1.52237 -0.92801,-1.95965 -2.48669,-2.30199 -2.43927,-0.53575 -4.79237,-0.4521 -4.79237,-2.16187 0,-0.80569 -0.45641,-1.31811 -1.17539,-1.31964 -0.64647,-10e-4 -2.19368,-0.62331 -3.43823,-1.38209 -2.20054,-1.34155 -2.81701,-0.54247 -2.52295,-4.08866 0,0 0.3024,-3.64663 0.3024,-3.64663 0,0 -2.59393,-1.35204 -2.59393,-1.35204 -1.65886,-0.86465 -3.89302,-1.35204 -6.19775,-1.35204 -3.27141,0 -3.7925,-0.21487 -5.64894,-2.32917 -2.03709,-2.32016 -2.06223,-2.32761 -6.45727,-1.91721 -3.7245,0.34781 -4.62668,0.21798 -5.78798,-0.83302 -0.92254,-0.83486 -2.19251,-1.1874 -3.85503,-1.07011 -1.36361,0.0961 -3.06408,-0.2554 -3.77884,-0.78157 -1.10976,-0.8168 -1.62156,-0.82193 -3.50461,-0.0352 -3.46635,1.44833 -5.98252,1.17323 -7.55512,-0.82602 -1.13071,-1.43748 -1.98465,-1.76766 -4.81538,-1.86197 -4.43035,-0.14769 -5.5904,-1.49635 -4.98311,-5.79385 0.70149,-4.96417 2.41965,-6.14514 9.49178,-6.52408 11.14279,-0.59703 36.46879,3.77544 45.83339,7.91306 0,0 2.94287,1.30028 2.94287,1.30028 0,0 5.17513,-1.63483 5.17513,-1.63483 10.04496,-3.17322 22.3672,-5.1438 34.27586,-5.48147 6.09528,-0.17291 12.52449,-0.60576 14.28712,-0.96205 4.41938,-0.89334 9.35524,-3.51887 11.58789,-6.16397 2.37654,-2.81557 5.68877,-9.76068 5.70144,-11.95489 0.0198,-3.52979 0.71459,-4.47576 4.40769,-6.00647 2.6243,-1.08774 4.7646,-2.73504 7.6626,-5.89776 0,0 4.0213,-4.38846 4.0213,-4.38846 0,0 1.3307,1.59769 1.3307,1.59769 2.0559,2.46832 1.6782,3.69544 -2.4681,8.01998 -4.2249,4.40637 -6.1899,8.9439 -4.9095,11.33646 1.9743,3.68898 -0.333,11.91112 -3.9203,13.96993 -1.4464,0.83013 -2.0841,1.80133 -2.3743,3.61613 -0.5513,3.44755 -3.62178,5.95363 -7.33647,5.98791 -2.4139,0.0227 -2.99075,0.3253 -4.15551,2.18288 -1.15089,1.83552 -1.80162,2.18611 -4.36575,2.3521 -1.6573,0.10715 -3.98395,0.64491 -5.17034,1.19466 -1.23406,0.57186 -2.87915,0.81836 -3.84449,0.57609 -1.09179,-0.27411 -2.75715,0.0944 -4.71807,1.04363 -3.25236,1.57442 -6.00863,1.44405 -8.95584,-0.42361 -1.40998,-0.89351 -1.71099,-0.83316 -3.54597,0.71084 -2.5357,2.13364 -5.67357,2.73169 -9.2624,1.76533 -3.64008,-0.98016 -4.65809,-0.34665 -2.73402,1.70141 1.24268,1.32276 1.60877,0.94918 1.26921,3.42649 -0.38616,2.81747 -0.50219,2.42436 1.22916,2.79369 1.00281,0.21402 3.40047,1.77041 4.64054,2.54217 1.80771,1.12499 2.75383,0.42239 2.49741,1.76372 -0.26249,1.37347 0.0553,1.83183 1.77523,2.56011 4.90235,2.07578 7.009,3.7938 3.14031,6.39471 -2.39508,1.61016 -6.41225,1.68378 -9.02792,0.63516 0,0 0,9e-5 0,9e-5 m 48.57462,-6.67375 c -0.9238,-0.83117 -1.7719,-2.26684 -1.8845,-3.19037 -0.1789,-1.46684 0.1772,-1.79342 2.8176,-2.58321 8.1139,-2.42708 10.9569,-3.77158 14.7464,-7.25338 4.9143,-4.51525 10.4824,-12.61361 13.0871,-20.27279 1.862,-4.97049 3.1794,-11.45724 3.1953,-16.11164 0,-6.67845 -1.112,-13.89538 -4.4075,-19.09083 -4.7821,-7.53905 -13.7233,-14.70662 -20.6664,-17.13251 -4.5822,-1.60104 -6.6853,-1.90871 -16.20882,-2.37129 -4.45671,-0.21657 -9.33599,-0.8456 -10.91441,-1.40732 -2.47825,-0.88191 -2.85454,-1.27542 -2.85454,-2.98514 0,-1.50097 0.51911,-2.28577 2.18288,-3.30021 2.59109,-1.5798 4.44186,-1.67298 7.53778,-0.37942 1.98068,0.82757 2.39627,0.82757 3.0831,0 1.07113,-1.29061 6.26238,-1.25461 7.34591,0.051 1.0811,1.30272 2.3273,1.27392 4.4277,-0.10233 1.6326,-1.06974 1.8014,-1.03394 4.6754,0.99181 2.5532,1.79974 3.2399,2.00341 4.78,1.41789 0.9891,-0.37604 2.6444,-0.49791 3.6785,-0.27071 2.1746,0.47764 5.2747,3.85061 5.2747,5.73897 0,0.99221 0.475,1.29178 2.0483,1.29178 4.0161,0 4.9265,2.57995 6.3163,6.92425 0.5312,1.66068 4.0226,2.51612 5.3154,3.05167 1.0488,0.43441 2.7718,1.6926 3.8289,2.79598 1.6087,1.67913 1.9226,2.57437 1.926,5.49235 0,2.99208 -0.8529,4.27671 0.7707,5.6573 1.6082,1.36743 1.8651,2.04231 1.7139,4.50156 -0.1162,1.88986 0.1897,3.31169 0.8818,4.10051 1.8315,2.08712 3.2432,5.43934 2.8241,6.70612 -0.8265,2.49783 -2.3299,5.5389 -2.9181,5.90236 -0.3382,0.20891 -0.1831,1.19027 0.3497,2.21142 1.4365,2.75374 1.1901,5.36661 -0.6827,7.23946 -0.9067,0.90672 -1.9083,1.6486 -2.2258,1.6486 -0.3174,0 -0.4502,1.75405 -0.2951,3.89786 0.2735,3.78388 0.2103,3.96065 -2.1634,6.04488 -1.345,1.18089 -3,2.14705 -3.678,2.14705 -0.9626,0 -1.3072,0.662 -1.5732,3.02207 -0.4161,3.69142 -1.3298,4.86298 -5.0299,6.44899 -1.5752,0.67524 -2.864,1.63911 -2.864,2.14197 0,2.47853 -5.9576,5.4309 -9.521,4.71821 -1.5268,-0.30535 -2.2287,-0.12387 -2.6869,0.69506 -0.4049,0.72351 -1.4971,1.1084 -3.1452,1.1084 -1.3887,0 -3.1116,0.44376 -3.8286,0.98612 -1.8447,1.39521 -3.3232,1.2596 -5.2594,-0.48237 0,0 0,0 0,0 m 61.9086,-13.09708 c -0.8575,-0.85751 2.0936,-1.5552 9.1187,-6.64311 4.677,-3.53117 10.0737,-9.14842 13.8374,-16.89494 3.4125,-7.02349 4.1292,-8.8954 4.0635,-20.66179 -0.04,-7.11887 -1.3195,-9.80104 -2.9377,-13.94646 -4.7739,-12.22957 -10.8768,-18.54782 -21.7294,-22.49592 -4.9843,-1.81327 -7.3627,-2.2426 -15.3046,-2.76276 -10.0789,-0.66013 -27.9442,-3.79874 -34.3602,-6.03643 -2.1583,-0.75277 -7.032,-2.76557 -10.5065,-3.50062 -6.7445,-1.42688 -10.53114,-1.14729 -14.87351,1.09823 -1.93076,0.99845 -1.98139,0.98306 -1.98139,-0.60216 0,-2.16133 3.95779,-5.59551 7.13577,-6.19169 4.25533,-0.79832 13.94903,0.99768 19.00163,2.78374 7.3226,2.58849 25.0025,5.74841 36.4684,6.51796 16.8992,1.13428 24.3681,3.90733 32.9302,12.22634 5.8441,5.67808 11.171,17.20429 12.387,26.80231 0.6468,5.10554 1.2828,7.92933 -0.3269,15.65073 -2.3131,11.09458 -5.1221,14.05531 -10.1254,21.23966 -5.1058,5.93762 -9.4171,8.97131 -12.6247,10.53442 -3.531,1.72071 -9.5382,3.51655 -10.1723,2.88249 0,0 0,0 0,0 m 32.1224,-15.63968 c 4.0874,-0.006 15.2115,-1.91667 18.4771,-3.3215 3.8496,-1.65611 4.016,-2.43456 1.8843,-8.82213 -2.0464,-6.13233 -4.0274,-9.1482 -10.0203,-15.25496 -4.8609,-4.95317 -5.3772,-5.73015 -5.3772,-8.09155 0,-1.95812 0.429,-3.28127 2.0626,-4.96145 4.7569,-5.15299 11.9138,-8.71532 15.6835,-11.27129 3.7697,-2.55594 5.3366,-3.45614 5.9148,-4.85544 0.5781,-1.39932 0.4981,-2.7428 0.1145,-5.12872 -0.3835,-2.38595 -1.0501,-6.35151 -2.925,-9.8689 -1.2342,-2.3154 -2.0474,-4.40637 -1.8072,-4.64661 0.8718,-0.8718 4.0429,1.53791 5.9096,4.49067 2.1805,3.44917 4.6,10.85261 4.6,14.07569 0,1.19727 -0.4951,3.22024 -1.1003,4.49549 -1.0988,2.31554 -7.9551,7.51314 -12.6382,10.50758 -4.1447,2.65011 -7.7545,6.44706 -7.7545,7.36702 0,0.3126 1.8475,2.71485 4.1054,5.33835 7.315,8.4992 10.8873,15.35956 11.5429,22.16738 0.3095,3.2154 0.132,4.19057 -1.093,6.0086 -2.1043,3.12248 -4.5338,4.28698 -12.9956,6.22896 -7.432,1.70563 -19.4198,2.05534 -22.3313,0.90156 2.7624,-1.51512 5.8449,-3.67957 7.7478,-5.35876 0,0 10e-5,0 10e-5,0"
        style={{fill: matsuriColors.BLACK}} />
      
      {children}

      <path
        id="black_top"
        d="m 955.91313,506.79533 c -0.30849,-0.30847 -0.35201,-2.57896 -0.0967,-5.04556 0.44473,-4.29684 0.60477,-4.61463 3.82096,-7.58716 2.86798,-2.65068 3.47204,-3.65769 4.14836,-6.91543 0.66889,-3.22209 1.33118,-4.34466 4.27363,-7.24377 1.91514,-1.88691 4.84217,-4.21248 6.50452,-5.1679 1.66235,-0.95545 3.47581,-2.10648 4.02993,-2.5579 1.7697,-1.4417 10.84779,-4.87071 18.47052,-6.97677 5.30815,-1.46653 8.86835,-2.04248 12.64525,-2.04562 4.9176,-0.003 5.3838,0.12246 7.2203,1.95891 1.5905,1.59055 1.9633,2.53942 1.9633,4.99776 0,1.66895 -0.8816,2.3701 -1.2046,2.56969 -0.3229,0.19956 -0.7762,0.44314 -1.7619,-0.47035 -2.6443,-2.45072 -4.4061,-2.63951 -13.4173,-1.43782 -12.34571,1.64636 -17.70628,3.93659 -27.37951,11.69748 -4.24655,3.40705 -4.73074,4.07231 -6.65955,9.15004 -1.65243,4.35019 -2.55158,5.785 -4.37397,6.97958 -2.02499,1.32744 -2.29394,1.84402 -2.29394,4.40649 0,2.3455 -0.29013,3.04342 -1.51121,3.63529 -1.73803,0.84243 -3.56658,0.8646 -4.37811,0.053 0,0 -3e-5,-3e-5 -3e-5,-3e-5"
        style={{fill: matsuriColors.BLACK}} />

    </g>
  );
}
'use client';

import { motion } from 'framer-motion';

const svgVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 20,
    transition: { duration: 5, ease: 'easeOut' },
  },
};

const pathVariants = {
  hidden: {
    pathLength: 0,
  },

  visible: {
    pathLength: 1,
    transition: {
      duration: 4,
      ease: 'easeInOut',
    },
  },
};

export const HeroSVG = () => {
  return (
    <div className='flex justify-center items-center w-full h-full mb-4 lg:max-h-[50vh] min-h-[40vh] min-w-[80vw] md:min-w-[0]'>
      <motion.svg
        viewBox='0 0 80 80'
        version='1.1'
        id='svg1'
        xmlns='http://www.w3.org/2000/svg'
        className='fill-[var(--color-foreground)]'
        /*   initial='hidden'
        animate='visible'
        variants={svgVariants} */
      >
        <g transform='matrix(0.46299523,0,0,-0.47406815,-10.004857,122.53162)'>
          <g transform='matrix(0.92934112,0,0,-0.92934112,61.533825,257.6145)'>
            <g>
              <motion.path
                /*  variants={pathVariants} */
                d='m 108.59596,95.145097 -1.59267,0.690397 -1.59267,0.690914 v 1.928048 c 0,1.919434 0.004,1.930864 0.92966,2.502694 0.51116,0.31584 1.01719,0.77223 1.12448,1.01389 0.10731,0.24166 0.1355,3.34048 0.0625,6.88588 l -0.13229,6.44664 -0.91985,-1.28726 c -0.50595,-0.70789 -1.35908,-1.76559 -1.89497,-2.34973 -0.53604,-0.5843 -1.01468,-1.40553 -1.06402,-1.82521 -0.10979,-0.93377 -0.70833,-1.34774 -1.6185,-1.11931 -1.21108,0.304 -1.27151,2.13854 -0.0801,2.43757 0.60116,0.15088 2.81086,2.76717 4.72994,5.60018 l 1.00407,1.4826 -0.078,6.94582 c -0.0782,6.9375 -0.0792,6.94697 -0.71985,7.62848 -0.90694,0.96457 -2.04626,0.90516 -3.40754,-0.17777 -1.75456,-1.39577 -3.756283,-4.11567 -5.111319,-6.94531 -1.429753,-2.98596 -3.136393,-7.53623 -3.155363,-8.41344 -0.007,-0.3202 0.677237,-3.4576 1.52032,-6.97167 1.492343,-6.22065 1.55539,-6.40518 2.393653,-6.97942 0.838999,-0.5749 0.860929,-0.63911 0.860929,-2.52077 V 98.877169 L 98.367122,98.19659 c -1.796426,-0.822495 -2.055391,-0.826735 -3.407544,-0.05168 l -0.191719,0.110071 c -0.25629,0.375584 -0.551868,0.754172 -0.887801,1.135331 l -0.04444,1.322918 -0.06563,1.96164 1.190108,0.71727 c 1.475113,0.88915 1.477237,0.94001 0.250114,5.8446 -1.433096,5.72855 -1.436865,5.74125 -1.825728,5.74125 -0.20038,0 -1.357036,-0.9104 -2.569869,-2.02261 l -2.205034,-2.0221 -0.132291,-1.95905 -0.132292,-1.95854 -1.539441,-0.69556 -1.539441,-0.69505 -1.437121,0.70486 -1.437122,0.70487 5.17e-4,1.92081 5.17e-4,1.92133 1.141015,0.72089 c 0.984669,0.62205 1.323564,0.69953 2.469617,0.56379 1.322663,-0.15667 1.335891,-0.15085 3.157947,1.43247 3.015599,2.62084 3.973993,3.76604 4.480346,5.35264 0.25539,0.80036 0.99161,2.81097 1.63556,4.46795 0.643953,1.65698 1.073727,3.10352 0.955497,3.21427 -0.32194,0.30158 -2.477876,-0.47672 -5.477185,-1.97765 -2.258946,-1.13049 -2.695871,-1.45148 -2.807581,-2.06189 -0.33276,-1.81825 -2.34451,-2.46135 -3.420463,-1.09348 -0.949592,1.20725 -0.606227,2.48603 0.799434,2.97605 0.45635,0.15907 0.938553,0.22206 1.071253,0.14004 0.1327,-0.082 2.69489,1.06337 5.693709,2.54507 5.146625,2.54297 5.579307,2.81538 7.702889,4.8488 4.060907,3.88855 6.329837,7.46907 6.596497,10.4097 0.11324,1.24882 0.0516,1.65475 -0.30593,2.01228 -0.24634,0.24635 -0.59764,0.44803 -0.78031,0.44803 -0.18268,0 -1.27746,-0.92274 -2.43293,-2.05052 -1.15567,-1.12779 -3.230367,-2.81903 -4.61005,-3.75791 -1.699666,-1.15681 -3.708671,-2.92942 -6.229077,-5.4963 l -3.720186,-3.7884 -2.228288,-0.68472 c -1.280583,-0.39327 -2.377425,-0.89691 -2.578654,-1.18442 -0.394872,-0.56361 -1.631603,-0.67053 -2.11925,-0.18294 -0.442542,0.44254 -0.396603,1.66872 0.077,2.06189 0.216948,0.18004 0.772939,0.27203 1.235584,0.20413 0.462641,-0.0679 1.624246,0.10424 2.581754,0.38292 1.640253,0.47744 1.897733,0.66851 4.452959,3.30626 1.491426,1.53975 2.711979,2.8733 2.711979,2.96312 0,0.0898 -1.357821,0.0428 -3.017387,-0.10438 -2.226526,-0.19746 -3.151437,-0.38906 -3.526917,-0.73071 -0.586803,-0.53395 -1.671324,-0.60806 -2.133719,-0.14573 -0.442055,0.44206 -0.397283,1.66854 0.07545,2.06086 0.23078,0.19166 0.804243,0.27359 1.389063,0.19844 1.288756,-0.16563 6.953679,0.2434 8.266162,0.59686 0.557903,0.15023 1.761569,0.77201 2.674772,1.38183 5.325005,3.55584 8.858205,8.91118 9.913605,15.02699 0.61759,3.5786 0.16257,5.30135 -1.50378,5.69474 -0.89095,0.21037 -2.0866,-0.80688 -4.19147,-3.56619 -0.838905,-1.09965 -2.523546,-2.9553 -3.743449,-4.12326 -2.154036,-2.06272 -3.288611,-2.84386 -8.832536,-6.0818 -1.572336,-0.91833 -3.256474,-2.16644 -4.151167,-3.0763 -1.511264,-1.53728 -4.590225,-5.99174 -6.392375,-9.24853 l -0.965833,-1.74511 v -5.32888 -5.32835 l 1.058334,-0.70074 1.058333,-0.70021 v -1.81333 -1.81281 l -1.559595,-0.78755 -1.559594,-0.78703 -1.483114,0.80305 -1.483114,0.80357 v 1.84123 c 0,1.82611 0.0074,1.84563 0.93276,2.39159 0.513083,0.30273 1.048864,0.7671 1.190625,1.03198 0.263369,0.49211 0.373646,9.51208 0.116272,9.51208 -0.07802,0 -1.156003,-0.2545 -2.395203,-0.56534 -1.881653,-0.47193 -2.355362,-0.70114 -2.870625,-1.38906 -0.82581,-1.10248 -3.323829,-5.58085 -3.323829,-5.95881 0,-0.16508 0.297657,-0.43576 0.661459,-0.60152 0.612326,-0.279 0.661458,-0.43699 0.661458,-2.12338 v -1.8216 l -1.653646,-0.74362 -1.653646,-0.74362 -1.322916,0.74879 -1.322917,0.74931 -0.077,1.99367 -0.07751,1.99368 1.544608,0.67024 c 1.535468,0.66591 1.557258,0.69149 3.728455,4.33049 l 2.184363,3.66076 2.566251,0.71261 c 1.411344,0.39202 2.766738,0.76915 3.011703,0.8382 0.848612,0.23921 5.633819,8.38002 5.459098,9.28728 -0.204742,1.06314 -1.197521,1.16377 -5.670972,0.57516 -3.599218,-0.47357 -4.267665,-0.6343 -4.659664,-1.12189 -0.251699,-0.31308 -1.427616,-2.47463 -2.61276,-4.80281 -1.184993,-2.32819 -2.262027,-4.36827 -2.393136,-4.53306 -0.131107,-0.16479 -0.210714,-0.65893 -0.17725,-1.09812 0.07868,-1.03252 -0.445816,-1.64486 -1.408699,-1.64486 -0.993815,0 -1.524202,0.98459 -1.068669,1.98437 0.165759,0.3638 0.48158,0.66146 0.701766,0.66146 0.402162,0 3.423813,5.64278 3.263367,6.0942 -0.110054,0.31005 -5.676461,-3.10797 -8.564335,-5.25911 l -2.364197,-1.76113 -0.07545,-2.25671 -0.07545,-2.25671 -1.538408,-0.68006 -0.38964,-0.17208 c -0.677559,-0.006 -1.354845,-0.0245 -2.031401,-0.0625 l -0.149345,0.0754 c -1.784799,0.9005 -1.95802,1.16237 -1.95802,2.95848 0,1.5309 0.05795,1.68203 0.997872,2.59984 0.954872,0.93241 1.056862,0.96751 2.357996,0.81339 l 1.360124,-0.16123 2.735233,1.99161 c 1.504311,1.09523 4.580871,3.1501 6.836275,4.56613 4.077928,2.56042 4.581823,2.95061 4.332553,3.3538 -0.07175,0.11609 -2.662032,0.21084 -5.755721,0.21084 -5.589455,0 -5.6285,-0.004 -6.170683,-0.62787 -0.300175,-0.34524 -1.111705,-0.84373 -1.803508,-1.10794 l -1.257804,-0.48008 -1.485698,0.77722 -1.48518,0.77721 -0.07906,1.81694 c -0.09006,2.07274 0.125402,2.4551 1.807641,3.21376 1.037871,0.46802 1.070754,0.46622 2.55695,-0.16795 1.232737,-0.52608 1.543456,-0.78962 1.715658,-1.45417 l 0.210323,-0.81184 5.09633,-0.17467 c 5.962243,-0.2044 10.486186,0.0909 15.764412,1.02837 6.395434,1.13567 9.837126,2.5173 9.837126,3.94859 0,0.66217 -0.486869,0.90785 -4.203878,2.12339 -2.60503,0.85199 -5.596236,0.11917 -9.362219,-2.29392 -1.196031,-0.76615 -1.395276,-0.80752 -3.738273,-0.76791 -2.102259,0.0355 -2.619486,-0.0435 -3.436483,-0.52555 -0.90412,-0.53354 -1.000841,-0.54182 -1.619539,-0.13643 -1.406396,0.92136 -0.281107,2.88244 1.307413,2.27842 0.392917,-0.14938 1.719886,-0.27182 2.948141,-0.27182 2.19425,0 2.284671,0.0262 5.153174,1.49706 1.605689,0.82339 2.825643,1.58488 2.710428,1.69189 -0.115209,0.10701 -1.936374,0.63382 -4.046264,1.17099 -4.485189,1.14171 -5.920158,1.15088 -8.310604,0.0527 l -1.564246,-0.7183 -3.986836,0.28163 c -3.285114,0.23205 -4.034164,0.2187 -4.256588,-0.0754 -0.148463,-0.1965 -0.939717,-0.73785 -1.758032,-1.20303 l -1.487765,-0.84595 -1.451074,0.64183 c -1.319338,0.58348 -1.465888,0.7331 -1.617989,1.65364 -0.357767,2.16601 -0.227742,2.78591 0.806669,3.84525 1.104215,1.13076 1.335037,1.17459 3.081982,0.57929 0.975866,-0.33236 1.325024,-0.6139 1.610755,-1.2976 0.472057,-1.12981 0.942286,-1.26696 5.902482,-1.72031 2.943122,-0.26884 2.99065,-0.26398 4.350122,0.42478 l 1.374593,0.6966 -1.412834,0.82993 c -0.777032,0.45631 -2.706797,1.68506 -4.28811,2.73058 -2.529594,1.67229 -2.985016,1.88275 -3.785299,1.75286 -0.766033,-0.12431 -1.037,-0.0203 -1.715657,0.65836 -1.558215,1.55822 -0.594659,4.02198 1.57303,4.02198 0.892202,0 1.875085,-1.10144 2.032951,-2.27842 0.139875,-1.04262 0.260561,-1.16382 2.960026,-2.95279 4.802846,-3.18296 6.322202,-3.87712 11.405506,-5.2126 2.542125,-0.66772 4.797173,-1.18065 5.011063,-1.13946 0.237889,0.0458 -1.053038,1.56089 -3.324345,3.90105 l -3.713468,3.82612 -1.120345,-0.44028 c -1.099464,-0.43189 -1.146155,-0.42678 -2.527494,0.25063 l -1.407666,0.68988 -0.117306,2.00866 c -0.109673,1.87435 -0.04745,2.22875 0.998389,2.88458 0.64601,0.21056 1.324202,0.54469 2.014864,1.01389 l 1.556494,-0.77514 1.711523,-0.85215 0.07803,-1.91874 0.07752,-1.91927 4.023527,-4.06486 c 2.212629,-2.23564 4.576184,-4.382 5.251875,-4.76922 3.293608,-1.88829 7.638541,-2.86609 10.24847,-2.30632 2.566936,0.55054 4.248733,1.55493 6.658509,3.97702 6.033922,6.06472 8.454782,11.26921 8.454782,18.17563 0,0.601 -0.0409,1.16419 -0.0765,1.7322 0.28448,-0.11475 0.56948,-0.22823 0.85472,-0.34107 0.74488,-0.29386 1.49535,-0.5754 2.21589,-0.92604 0.64462,-0.33801 1.26959,-0.71244 1.90428,-1.06867 0.51301,-0.29986 1.03108,-0.5915 1.54099,-0.89659 0.0785,-0.0481 0.15965,-0.0915 0.23874,-0.13849 0.0921,-2.96119 0.63509,-4.90151 2.06551,-7.7587 1.56425,-3.12459 4.6322,-7.30615 6.9019,-9.40769 3.71309,-3.43751 7.88492,-4.2445 13.05244,-2.52491 2.61773,0.87119 4.70515,2.39692 8.80514,6.4363 l 3.77032,3.7145 v 1.89601 c 0,2.12099 0.11513,2.30257 2.08669,3.29437 1.11553,0.56097 1.1991,0.5671 2.13682,0.14418 0.53673,-0.24204 1.31039,-0.70698 1.71928,-1.03301 0.73409,-0.58534 0.74119,-0.61825 0.55397,-2.61587 l -0.18965,-2.02313 -1.2175,-0.68058 c -1.18065,-0.65988 -1.25322,-0.66794 -2.40502,-0.27543 l -1.18804,0.40462 -3.6587,-3.6251 c -2.01219,-1.99375 -3.65869,-3.71753 -3.65869,-3.82974 0,-0.27007 0.95294,-0.0782 5.68854,1.14412 4.55572,1.17599 5.92722,1.81521 10.31875,4.80901 2.99967,2.04485 3.19095,2.22823 3.45509,3.32434 0.61225,2.53913 3.28632,2.96185 4.24367,0.67076 0.32766,-0.78417 0.32766,-1.02554 0,-1.80971 -0.47451,-1.13569 -1.26628,-1.57569 -2.44016,-1.35547 -0.8069,0.15137 -1.22189,-0.0392 -3.8747,-1.7787 -1.63394,-1.07154 -3.47741,-2.23018 -4.09587,-2.57504 -0.61846,-0.34487 -1.12448,-0.70954 -1.12448,-0.81028 0,-0.1008 0.58767,-0.43622 1.30586,-0.74518 1.55576,-0.66932 3.4017,-0.71882 6.71639,-0.18087 2.44808,0.39741 3.09025,0.70306 3.09025,1.47123 0,0.6885 0.54943,1.02669 2.2071,1.35961 l 1.48828,0.2992 1.19476,-0.97926 c 1.18401,-0.97019 1.19511,-0.99473 1.19114,-2.61535 -2.6e-4,-0.11161 -0.0121,-0.19822 -0.015,-0.30747 -0.63711,-0.49699 -1.13196,-1.27005 -1.37666,-2.28048 -0.17338,-0.0797 -0.31827,-0.15757 -0.50488,-0.2341 l -1.5043,-0.61701 -1.4919,0.76946 c -0.82064,0.42301 -1.59364,0.95242 -1.7172,1.17667 -0.19882,0.361 -0.65789,0.37101 -4.01526,0.0884 l -3.79047,-0.31936 -1.85208,0.8201 c -2.70079,1.19561 -3.64611,1.1335 -10.18646,-0.66921 -1.09125,-0.30083 -2.08329,-0.63235 -2.204,-0.73639 -0.12072,-0.10404 1.06041,-0.87531 2.62413,-1.7141 l 2.84324,-1.52549 3.22822,0.15296 c 3.41905,0.16156 3.82716,0.0531 3.82716,-1.01441 0,-0.8407 -0.8956,-1.54149 -1.70894,-1.33739 -0.36968,0.0928 -0.67231,0.28565 -0.67231,0.4284 0,0.15256 -1.10301,0.25942 -2.67581,0.25942 h -2.67632 l -1.9637,1.22421 c -2.59766,1.61914 -4.71684,2.46605 -6.18929,2.47375 -1.24824,0.007 -5.36628,-1.07436 -6.67763,-1.75234 -1.91157,-0.98859 0.2138,-2.54478 5.17281,-3.78789 6.34632,-1.59088 8.98632,-1.88018 17.27078,-1.89187 4.17656,-0.006 7.6884,0.088 7.80366,0.20826 0.11522,0.12029 0.24946,0.51517 0.29817,0.87746 0.0873,0.64987 0.40943,0.8785 2.42311,1.71979 0.88582,0.37012 0.94718,0.35388 2.33009,-0.61236 l 1.42059,-0.99219 v -1.79937 -1.79938 l -1.4981,-0.88211 -1.49758,-0.88212 -1.54513,0.73122 c -0.84943,0.40213 -1.70765,0.92864 -1.90738,1.16996 -0.31795,0.38414 -1.08326,0.43873 -6.15156,0.43873 -3.3794,0 -5.78879,-0.1023 -5.78879,-0.24546 0,-0.45338 1.8412,-1.76846 5.02966,-3.59255 1.74142,-0.99637 4.44268,-2.80254 6.00274,-4.01371 2.74721,-2.13307 2.8813,-2.20245 4.25452,-2.20245 1.21047,0 1.56861,-0.12567 2.45308,-0.85989 1.01569,-0.84322 1.03599,-0.89463 1.04076,-2.6417 l 0.005,-1.78181 -1.50017,-0.75861 -1.50068,-0.75861 -1.54203,0.6656 -1.54254,0.66559 v 2.18798 2.18849 l -2.52904,1.9973 c -1.39096,1.09843 -3.32588,2.43053 -4.29948,2.95951 -0.97372,0.52882 -2.33599,1.29997 -3.02721,1.71307 -0.69123,0.41325 -1.25677,0.7031 -1.25677,0.64441 0,-0.0587 0.64784,-1.40441 1.43919,-2.99052 0.868,-1.73952 1.70814,-3.06071 2.11667,-3.32848 1.48119,-0.97052 0.29803,-3.14308 -1.37304,-2.52181 -0.47517,0.17663 -0.59532,0.42551 -0.59532,1.23404 0,0.76146 -0.62492,2.22399 -2.51664,5.88904 -1.38394,2.68169 -2.66401,5.02255 -2.84427,5.20124 -0.48215,0.47791 -8.78143,1.50362 -9.41648,1.16375 -0.86593,-0.46327 -0.84849,-1.27541 0.0646,-3.01584 1.2361,-2.35663 3.77368,-6.38878 4.29276,-6.82129 0.24421,-0.20349 1.76484,-0.72829 3.37964,-1.16633 l 2.93625,-0.79634 1.9973,-3.63182 c 1.93629,-3.52044 2.04147,-3.65412 3.44113,-4.36304 l 1.44384,-0.73122 0.078,-1.91565 0.0775,-1.91512 -1.42885,-0.70074 -1.42834,-0.70073 -1.62574,0.63045 -1.62574,0.63046 v 1.91719 c 0,1.63064 0.0791,1.96685 0.52917,2.24793 0.29104,0.18176 0.52917,0.61122 0.52917,0.95446 0,0.6378 -2.62503,5.56169 -3.23495,6.06785 -0.27741,0.23024 -4.28898,1.38286 -4.81262,1.38286 -0.0849,0 -0.15452,-2.20159 -0.15452,-4.89169 v -4.89118 l 1.05834,-0.66817 1.05833,-0.66818 v -1.82883 -1.82883 l -1.42369,-0.77101 -1.42368,-0.77101 -1.61902,0.73484 -1.61903,0.73484 v 1.865 1.865 l 1.01648,0.64182 1.01699,0.64182 0.1726,2.9993 c 0.0951,1.64963 0.17415,4.01893 0.17415,5.26428 0.001,2.09992 -0.0627,2.36932 -0.87695,3.70417 -0.48294,0.79181 -1.70334,2.80773 -2.71198,4.47931 -2.63762,4.37151 -5.31023,6.98907 -9.44748,9.25422 -4.086,2.23714 -7.28876,4.66998 -9.20564,6.99233 -0.85358,1.03417 -2.18942,2.6545 -2.96778,3.6003 -1.6474,2.00126 -2.45099,2.53525 -3.44113,2.28668 -1.30085,-0.32649 -1.86646,-2.2567 -1.50276,-5.12578 0.66638,-5.25549 3.59101,-10.44054 7.89358,-13.99501 2.81208,-2.32309 4.33706,-2.93901 8.45323,-3.41427 1.93718,-0.22359 3.91956,-0.33227 4.40438,-0.24132 1.19582,0.22437 1.99523,-0.24173 1.99523,-1.16272 0,-0.40234 -0.14266,-0.87441 -0.31729,-1.04904 -0.47942,-0.47935 -1.65987,-0.38049 -2.16835,0.18139 -0.36168,0.39952 -1.00268,0.53576 -3.23339,0.68781 -1.5303,0.10416 -2.85054,0.1216 -2.93367,0.0388 -0.0831,-0.0831 0.93839,-1.3327 2.26963,-2.77658 l 2.42052,-2.62567 2.12184,-0.57258 c 1.16693,-0.31489 2.3265,-0.55224 2.57658,-0.5271 1.04283,0.10478 1.40771,-0.0516 1.65882,-0.7121 0.20148,-0.5298 0.16695,-0.84727 -0.1447,-1.32292 -0.55433,-0.84587 -1.53842,-0.80877 -2.24121,0.0842 -0.43557,0.55402 -1.05874,0.83225 -2.83238,1.264 l -2.27428,0.55346 -2.94091,3.27887 c -2.35235,2.62249 -3.61968,3.76491 -6.33088,5.70507 -1.86411,1.33422 -4.18912,3.21889 -5.16609,4.18838 -1.80783,1.79397 -2.58936,2.12374 -3.22254,1.36064 -0.45241,-0.54515 -0.18895,-2.83456 0.50178,-4.36046 1.43528,-3.17079 5.79457,-8.39474 8.4801,-10.16269 0.95599,-0.62917 3.71308,-2.09504 6.12676,-3.25664 3.38806,-1.63048 4.57613,-2.08465 5.21002,-1.99161 0.62791,0.0922 0.98018,-0.0386 1.4981,-0.55656 0.37239,-0.37244 0.67696,-0.92983 0.67696,-1.23868 0,-0.75957 -1.39601,-2.1084 -2.1823,-2.1084 -0.77058,0 -1.70723,0.94808 -1.82934,1.85208 -0.0663,0.4909 -0.46097,0.86053 -1.53118,1.43402 -1.11634,0.5983 -6.483,2.79931 -6.82542,2.79931 -0.30877,0 0.12276,-1.54229 1.09502,-3.91345 0.63902,-1.55829 1.38084,-3.53727 1.649,-4.39767 0.44772,-1.43644 0.71372,-1.76841 3.25406,-4.06228 l 2.76624,-2.49804 1.28158,0.17002 c 1.15722,0.15353 1.39594,0.0877 2.46341,-0.67903 l 1.18184,-0.84905 v -1.82159 -1.82211 l -1.41076,-0.64596 c -1.37971,-0.63172 -1.43936,-0.63632 -2.71198,-0.21239 -1.90763,0.63551 -1.96267,0.71586 -1.96267,2.86701 v 1.91461 l -2.24638,1.95596 c -1.23552,1.07548 -2.39638,1.95543 -2.57969,1.95543 -0.21132,0 -0.73152,-1.61906 -1.42161,-4.42298 -1.63299,-6.63601 -1.62895,-6.10675 -0.0589,-7.1143 1.21089,-0.77701 1.31436,-0.92188 1.17151,-1.63607 -0.0862,-0.43096 -0.15658,-1.27934 -0.15658,-1.88568 0,-1.067617 -0.0438,-1.124079 -1.3963,-1.787488 l -1.39681,-0.685229 -1.31517,0.655257 c -1.76351,0.878481 -1.97714,1.217581 -1.97714,3.14245 0,1.59932 0.0251,1.65765 0.93276,2.19315 0.51279,0.30255 0.97509,0.70149 1.02785,0.88625 0.0528,0.18476 0.7823,3.21476 1.62109,6.73292 l 1.52497,6.39754 -0.83664,2.39572 c -2.45798,7.03888 -6.24515,12.9051 -8.8961,13.78004 -1.11585,0.36826 -1.79855,0.0605 -2.5306,-1.13998 -0.47365,-0.7768 -0.51521,-1.37634 -0.51521,-7.63365 v -6.79131 l 2.32234,-2.99827 c 1.27722,-1.64908 2.7655,-3.28673 3.30729,-3.63854 1.07635,-0.69889 1.28758,-1.53359 0.56947,-2.25154 -0.49831,-0.49854 -1.53008,-0.54447 -1.90996,-0.0853 -0.15046,0.1819 -0.31352,0.6511 -0.36276,1.04283 -0.0831,0.66115 -3.28479,4.92002 -3.72794,4.95887 -0.10914,0.01 -0.19844,-2.95335 -0.19844,-6.58409 v -6.60218 l 1.20923,-0.83199 c 0.80158,-0.55149 1.15832,-0.964333 1.05833,-1.224736 -0.083,-0.21618 -0.15089,-1.013321 -0.15089,-1.771469 V 96.567232 L 110.046,95.856165 Z m 36.26652,13.493753 c 0.006,0.0156 0.0251,0.0929 0.0279,0.0935 0.0212,0.005 -0.008,-0.0423 -0.0119,-0.0636 -0.005,-0.0103 -0.0111,-0.0197 -0.016,-0.03 z m -106.081385,2.69802 c -0.451968,0.2897 -0.894047,0.58492 -1.597318,1.048 -0.276397,0.18653 -0.53882,0.39079 -0.808736,0.5855 0.799937,-0.54753 1.601629,-1.09269 2.406054,-1.6335 z m 93.643895,4.18063 c -0.86917,-0.0921 -1.63995,0.86196 -1.13326,1.97404 0.2178,0.47805 0.50864,0.66145 1.048,0.66145 1.32576,0 1.83806,-1.17379 0.94361,-2.16214 -0.26795,-0.29593 -0.56863,-0.44267 -0.85835,-0.47335 z m -47.712848,0.007 c -0.389492,-0.0451 -0.795567,0.084 -1.110527,0.39894 -0.483342,0.4832 -0.526122,1.00048 -0.14211,1.71824 0.409673,0.76533 1.721265,0.6786 2.263945,-0.14986 0.401473,-0.61274 0.401473,-0.71017 0,-1.32291 -0.24902,-0.38027 -0.621818,-0.59931 -1.011308,-0.64441 z m 88.167228,12.28866 v 5.1e-4 5.2e-4 0.10025 c 0.0172,-0.0197 0.0338,-0.0417 0.0512,-0.061 -0.017,-0.0133 -0.0341,-0.027 -0.0512,-0.0403 z m -2.29857,11.35434 c -0.0462,0.002 -0.0924,0.005 -0.13797,0.005 0.008,0.01 0.013,0.0177 0.0233,0.03 0.0349,0.006 0.0649,0.0127 0.10645,0.0181 0.004,-0.0174 0.006,-0.0351 0.008,-0.0527 z M 61.146139,187.14465 c -0.141211,0.0628 -0.283405,0.12341 -0.424264,0.18707 0.08058,-0.0122 0.157604,-0.0181 0.23151,-0.0181 0.06575,-0.0568 0.124957,-0.11178 0.192754,-0.16898 z'
                transform='matrix(1.0760312,0,0,-1.0760312,-66.212313,277.20123)'
              />
              <motion.path
                /*     variants={pathVariants} */
                d='M 92.645904,43.03001 86.327766,49.348148 80.009628,43.03001 V 32.626923 h -3.159073 v 11.056743 c 0,0.420265 0.165711,0.821503 0.462578,1.116959 l 7.435189,7.434459 v 3.430569 L 49.998558,90.41542 V 68.031158 l 20.071823,-20.07183 c 0.29686,-0.294751 0.462578,-0.695988 0.462578,-1.116249 V 31.701387 l 12.17379,-12.17379 c 0.296852,-0.29475 0.462578,-0.695987 0.462578,-1.116252 V 2.6159964 H 80.010254 V 17.757687 L 68.953514,28.814428 57.896771,17.757685 V 2.6159952 h -3.15907 V 18.411342 c 0,0.420266 0.165711,0.821501 0.462578,1.116957 l 12.17379,12.173067 V 46.188678 L 49.999187,63.56356 V 45.262619 c 0,-0.420265 -0.16571,-0.821503 -0.462577,-1.116959 L 32.624218,27.23399 V 15.905748 l 4.276112,-4.276117 c 0.296863,-0.295455 0.462577,-0.696692 0.462577,-1.116957 V 2.6150007 H 34.203838 V 9.8590183 L 31.044771,13.018086 27.885702,9.8590173 V 2.615 h -3.159069 v 7.897674 c 0,0.420264 0.165708,0.821502 0.462578,1.116957 l 4.276115,4.275395 v 11.982622 c 0,0.420263 0.16571,0.821501 0.462578,1.116956 L 46.840298,45.916275 V 77.777748 L 27.885883,58.82333 V 40.522388 h -3.159069 v 15.14169 L 13.670072,44.607334 v -6.589638 l 5.85565,-5.855652 C 19.822586,31.86659 19.9883,31.465353 19.9883,31.04509 v -7.897675 h -3.159069 v 7.244017 L 12.090629,35.130035 7.3520245,30.391432 V 23.147415 H 4.192955 v 7.897675 c 0,0.420263 0.16571,0.8215 0.4625783,1.116954 l 5.8556517,5.854931 v 7.244019 c 0,0.420261 0.165709,0.821503 0.462578,1.116955 L 46.840931,82.243317 V 97.385002 H 50 V 94.879585 L 87.446709,57.432873 c 0.296852,-0.29475 0.462578,-0.695988 0.462578,-1.116249 v -4.08495 l 7.43518,-7.435184 c 0.29686,-0.294751 0.462578,-0.695988 0.462578,-1.116253 V 32.623493 h -3.159073 z'
              />
            </g>
          </g>
        </g>
      </motion.svg>
    </div>
  );
};

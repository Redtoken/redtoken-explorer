import "./assets/css/vendor/bootstrap.min.css";
import "./assets/css/vendor/bootstrap.rtl.only.min.css";
import "react-circular-progressbar/dist/styles.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import 'react-image-lightbox/style.css';
import 'react-toastify/dist/ReactToastify.css';
import "./assets/css/custom.css";

import { isMultiColorActive, defaultColor, themeColorStorageKey, isDarkSwitchActive } from "./constants/defaultValues";
const color =
  (isMultiColorActive || isDarkSwitchActive) && localStorage.getItem(themeColorStorageKey)
    ? localStorage.getItem(themeColorStorageKey)
    : defaultColor;

localStorage.setItem(themeColorStorageKey, color);
let render = () => {
  import('./assets/css/sass/themes/gogo.' + color + '.scss').then(x => {
    require('./AppRenderer');
  });
};
render();
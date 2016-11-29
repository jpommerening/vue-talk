import de from 'bundle?lazy&name=de!./slides-loader!./de/index.yml';
import en from 'bundle?lazy&name=en!./slides-loader!./en/index.yml';

const translations = {
   de,
   en
};

export default function load(language, callback) {
   return translations[ language ](callback);
};

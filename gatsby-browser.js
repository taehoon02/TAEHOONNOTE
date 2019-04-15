import 'typeface-poppins';
import 'typeface-notosans-kor';

import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/all.css';

import './src/scss/theme.scss';

import numeral from 'numeral';

numeral.register('locale', 'fs', {
  abbreviations: {
    thousand: 'K',
    million: 'M',
    billion: 'B',
    trillion: 'T',
  },
});

numeral.locale('fs');

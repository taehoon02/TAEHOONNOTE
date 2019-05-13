import numeral from 'numeral';

import 'typeface-poppins';
import 'typeface-notosans-kor';
import 'typeface-noto-sans';

import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/all.css';

import './src/scss/theme.scss';

numeral.register('locale', 'fs', {
  abbreviations: {
    thousand: 'K',
    million: 'M',
    billion: 'B',
    trillion: 'T',
  },
});

numeral.locale('fs');

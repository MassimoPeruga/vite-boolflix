// partial.js

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar as star } from '@fortawesome/free-solid-svg-icons';
import { faStar as starEmpty } from '@fortawesome/free-regular-svg-icons';

library.add(star, starEmpty);

export { FontAwesomeIcon };
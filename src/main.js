//file di partenza Vue
import { createApp } from 'vue';
import App from './App.vue';
//file di partenza stili progetto
import './assets/scss/style.scss';
//file di partenza js
import './assets/js/myscript';
// file di partenza FontAwesome
import { FontAwesomeIcon } from './assets/js/_partials/_fontAwesome';

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');

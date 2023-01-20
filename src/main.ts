import {createApp} from 'vue'
import '../public/styles/style.css'
import App from './App.vue'
import router from "./routes";


const app = createApp(App);

app
    .use(router)
    .mount('#app');

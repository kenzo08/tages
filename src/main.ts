import {createApp} from 'vue'
import '../public/styles/style.css'
import App from './App.vue'
import router from "./routes";
import store from "./store/userStore";


const app = createApp(App);

app
    .use(store)
    .use(router)
    .mount('#app');

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Legend,
    Tooltip
} from 'chart.js';
import ToastService from 'primevue/toastservice';
import "./main.css";
import { VueQueryPlugin } from 'vue-query';

const app = createApp(App)

Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Legend,
    Tooltip
);

app.use(ToastService);
app.use(VueQueryPlugin);
app.use(router);
app.use(PrimeVue, {
    unstyled: true
});

app.mount('#app')

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import monitor from '../../src/webEyeSDK'
createApp(App).use(monitor,{
    url:'http://localhost:9800/reportData'
}).mount('#app')

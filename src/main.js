
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

window.Kakao.init(process.env.VUE_APP_KAKAO_APP_KEY);
console.log(window.Kakao.isInitialized()); // 초기화 여부 확인

const app = createApp(App)
app.use(router)
app.mount('#app')

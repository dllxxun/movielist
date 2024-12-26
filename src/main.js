
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Kakao SDK 초기화 - JavaScript 키 사용
if (window.Kakao && !window.Kakao.isInitialized()) {
  window.Kakao.init(process.env.VUE_APP_KAKAO_APP_KEY)
  console.log('카카오 초기화 완료:', window.Kakao.isInitialized())
}

const app = createApp(App)
app.use(router)
app.mount('#app')

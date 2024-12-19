<template>
  <button @click="loginWithKakao" class="kakao-login-btn">
    카카오 로그인
  </button>
</template>

<script>
export default {
  name: 'KakaoLogin',
  methods: {
    loginWithKakao() {
      const KAKAO_APP_KEY = process.env.VUE_APP_KAKAO_APP_KEY;
      const REDIRECT_URI = window.location.origin;
      const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_APP_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
      
      window.location.href = KAKAO_AUTH_URL;
    }
  }
}
</script>

<style scoped>
.kakao-login-btn {
  width: 100%;
  height: 60px;
  background-color: #FEE500;
  color: #000000;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 12px;
}

.kakao-login-btn:hover {
  background-color: #E6CF00;
}
</style>

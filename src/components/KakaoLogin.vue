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
      if (!window.Kakao) {
        console.error('Kakao SDK not loaded');
        return;
      }

      window.Kakao.Auth.login({
        success: (authObj) => {
          // 로그인 성공 시 사용자 정보 요청
          window.Kakao.API.request({
            url: '/v2/user/me',
            success: (res) => {
              const kakaoAccount = res.kakao_account;
              
              // 사용자 정보 저장
              localStorage.setItem('isLoggedIn', 'true');
              localStorage.setItem('userNickname', kakaoAccount.profile.nickname);
              localStorage.setItem('userEmail', kakaoAccount.email);
              
              // 추가 정보 콘솔 출력
              console.log('카카오 계정 정보:', kakaoAccount);
              
              // 메인 페이지로 이동
              this.$router.push('/home');
            },
            fail: (error) => {
              console.error('사용자 정보 요청 실패', error);
              alert('사용자 정보를 가져오는데 실패했습니다.');
            }
          });
        },
        fail: (err) => {
          console.error('카카오 로그인 실패', err);
          alert('카카오 로그인에 실패했습니다.');
        }
      });
    }
  }
}
</script>

<style scoped>
.kakao-login-btn {
  width: 104%;
  height: 60px;
  background-color: #FEE500;
  color: #000000;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.kakao-login-btn:hover {
  background-color: #E6CF00;
}
</style>

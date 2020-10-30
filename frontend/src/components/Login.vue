<template>
  <div class="login-container">
    <div class="login">
      <div class="input-id">
        <input type="text" v-model="user_id" placeholder="아이디" />
        <button>중복확인</button>
      </div>
      <div class="input-pw">
        <input type="password" v-model="user_pw" placeholder="비밀번호" />
      </div>
      <button class="btn_create_user">생성하기</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_id: "",
      user_pw: ""
    };
  }
};
</script>

<style></style>

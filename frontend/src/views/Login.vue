<template>
  <v-card class="login-container">
    <v-card-title>로그인</v-card-title>
    <div class="input-box d-flex align-center">
      <h6 class="text-h6">아이디</h6>
      <v-text-field
        label="아이디를 입력해주세요."
        :rules="rulesID"
        v-model="user.user_id"
      ></v-text-field>
    </div>
    <div class="input-box d-flex align-center">
      <h6 class="text-h6">비밀번호</h6>
      <v-text-field
        label="비밀번호를 입력해주세요."
        :rules="rulesPW"
        v-model="user.user_pw"
      ></v-text-field>
    </div>
    <v-btn @click="login">로그인</v-btn>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      rulesID: [
        // value => !!value || "반드시 입력해주세요.",
        value => {
          return !!value || "반드시 입력해주세요";
        }
      ],
      rulesPW: [
        // value => !!value || "반드시 입력해주세요.",
        value => {
          return !!value || "반드시 입력해주세요";
        }
      ],
      user: [
        {
          user_id: "",
          user_pw: ""
        }
      ]
    };
  },
  methods: {
    login: function() {
      this.$http
        .post(`/posting/loginCheck`, {
          id: this.user.user_id,
          pw: this.user.user_pw
        })
        .then(response => {
          if (response.data) {
            this.$store.commit("loginCheck", response.data);
            this.$router.push({
              name: "Posting"
            });
          } else {
            alert("회원정보가 일치하지 않습니다.");
          }
        });
    }
  }
};
</script>

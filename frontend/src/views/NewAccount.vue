<template>
  <v-card class="newAccount-container">
    <div class="input-id">
      <v-text-field
        label="아이디를 입력해주세요."
        :rules="rulesID"
        v-model="create_user.user_id"
      ></v-text-field>
      <button>중복확인</button>
    </div>
    <div class="input-pw">
      <v-text-field
        label="비밀번호를 입력해주세요."
        :rules="rulesPW"
        v-model="create_user.user_pw"
      ></v-text-field>
    </div>
    <button class="btn_create_user">생성하기</button>
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
        },
        // value => (value && value.length >= 4) || "4글자 이상 입력해주세요"
        value => {
          return (value && value.length >= 4) || "4자 이상 입력해주세요";
        }
      ],
      rulesPW: [
        // value => !!value || "반드시 입력해주세요.",
        value => {
          return !!value || "반드시 입력해주세요";
        },
        // value => (value && value.length >= 4) || "4글자 이상 입력해주세요"
        value => {
          return (value && value.length >= 8) || "8자 이상 입력해주세요";
        }
      ],
      create_user: [
        {
          user_id: "",
          user_pw: ""
        }
      ]
    };
  }
};
</script>

<style></style>

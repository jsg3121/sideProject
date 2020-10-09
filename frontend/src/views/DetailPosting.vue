<template>
  <div class="detail-container">
    <div v-if="edit === false">
      <v-card class="mx-auto mt-10" width="100%" height="800" elevation="10">
        <v-card-title>제목 : {{ detail.title }}</v-card-title>
        <div class="d-flex justify-space-between mx-5">
          <v-card-subtitle class="pa-0"
            >작성자 : {{ detail.user_id }}</v-card-subtitle
          >
          <v-card-subtitle class="pa-0"
            >작성 일시 : {{ detail.upload_date }}</v-card-subtitle
          >
        </div>
        <v-card-text>
          {{ detail.description }}
        </v-card-text>
      </v-card>
    </div>
    <div v-else>
      <v-card class="mx-auto mt-10" width="100%" height="800" elevation="10">
        <v-card-title
          >제목 :
          <input type="text" v-model="detail.title" />
        </v-card-title>
        <div class="d-flex justify-space-between mx-5">
          <v-card-subtitle class="pa-0"
            >작성자 : {{ detail.user_id }}</v-card-subtitle
          >
          <v-card-subtitle class="pa-0"
            >비밀번호 :<input type="text" v-model="detail.password"
          /></v-card-subtitle>
          <v-card-subtitle class="pa-0"
            >작성 일시 : {{ detail.upload_date }}</v-card-subtitle
          >
        </div>
        <v-card-text>
          {{ detail.description }}
        </v-card-text>
      </v-card>
    </div>
    <button @click="editPosting">수정하기</button>
  </div>
</template>

<script>
export default {
  created() {
    this.readPosting();
  },
  data() {
    return {
      detail: {},
      edit: false,
      postingPW: "",
    };
  },
  methods: {
    readPosting: async function () {
      let data = this.$route.params.data;

      await this.$http.get(`/posting/detail/${data}`).then((response) => {
        this.detail = response.data[0];
      });
      this.postingPW = this.detail.password;
      this.detail.password = "";
    },
    editPosting: function (event) {
      if (this.edit === false) {
        event.target.innerHTML = "저장하기";
        this.edit = true;
      } else {
        if (this.detail.password === this.postingPW) {
          let data = this.detail.data_id;
          console.log(event.target);
          this.$http
            .put(`/posting/edit/${data}`, this.detail)
            .then((response) => {
              alert("수정되었습니다.");
            })
            .catch((error) => {
              alert("수정하지 못했습니다.");
            });
          this.$router.push({
            name: "Posting",
          });
        } else {
          alert("비밀번호가 일치하지 않습니다.");
        }
      }
    },
  },
};
</script>

<style>
</style>
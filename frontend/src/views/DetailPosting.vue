<template>
  <div class="detail-container">
    <v-btn
      color="primary"
      elevation="2"
      tile
      type="submit"
      class="mt-10"
      @click="editPosting"
      >수정하기</v-btn
    >
    <v-btn
      color="primary"
      elevation="2"
      tile
      type="submit"
      class="mt-10 ml-5"
      @click="delPosting"
      >삭제하기</v-btn
    >
    <div v-if="edit === false">
      <v-card
        class="mx-auto mt-5 blue lighten-5"
        width="100%"
        height="800"
        elevation="10"
      >
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
      <v-card
        class="mx-auto mt-5 blue lighten-5"
        width="100%"
        height="800"
        elevation="10"
      >
        <v-card-title
          >제목 :
          <input type="text" v-model="detail.title" class="white" />
        </v-card-title>
        <div class="d-flex justify-space-between mx-5">
          <v-card-subtitle class="pa-0"
            >작성자 : {{ detail.user_id }}</v-card-subtitle
          >
          <v-card-subtitle class="pa-0"
            >작성 일시 : {{ detail.upload_date }}</v-card-subtitle
          >
        </div>
        <v-card-text>
          <textarea
            name=""
            id=""
            v-model="detail.description"
            class="white"
          ></textarea>
        </v-card-text>
      </v-card>
    </div>
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
      postingPW: ""
    };
  },
  methods: {
    readPosting: async function() {
      let data = this.$route.params.data;

      await this.$http.get(`/posting/detail/${data}`).then(response => {
        this.detail = response.data[0];
      });
      this.postingPW = this.detail.password;
      this.detail.password = "";
    },
    editPosting: function(event) {
      if (this.edit === false) {
        event.target.innerHTML = "저장하기";
        this.edit = true;
      } else {
        let data = this.detail.data_id;
        this.$http
          .put(`/posting/edit/${data}`, this.detail)
          .then(response => {
            alert("수정되었습니다.");
          })
          .catch(error => {
            alert("수정하지 못했습니다.");
          });
        this.$router.push({
          name: "Posting"
        });
      }
    },
    delPosting: function(event) {
      let delConfirm = confirm("게시글을 삭제하시겠습니까?");

      if (delConfirm) {
        let data = this.detail.data_id;
        this.$http
          .put(`/posting/del/${data}`, this.detail)
          .then(response => {
            alert("성공적으로 삭제되었습니다.");
          })
          .catch(error => {
            alert("게시글을 삭제하지 못했습니다.");
          });
      }
    }
  }
};
</script>

<style land="scss">
input[type="text"] {
  width: 50rem;
  height: 2rem;
  padding: 3px 0 2px 10px;
  margin-left: 10px;
  font-size: 1rem;
}

input[type="password"] {
  width: 10rem;
  height: 2rem;
  padding: 3px 0 2px 10px;
  margin-left: 10px;
}

textarea {
  width: 100%;
  padding: 3px;
  height: 20rem;
  resize: none;
}
</style>

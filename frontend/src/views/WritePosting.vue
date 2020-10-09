<template>
  <v-card
    elevation="5"
    outlined
    class="write-container blue lighten-4"
    width="80%"
  >
    <form method="post" @submit.stop.prevent="upload" class="text-center">
      <div class="write_title d-flex mt-10 ml-10 align-center">
        <h1 class="text-right mr-5">제목 :</h1>
        <input
          type="text"
          required
          name="title"
          v-model="posting.title"
          class="elevation-3 white"
        />
      </div>
      <div class="write_title d-flex mt-10 ml-10 align-center">
        <h1 class="text-right mr-5">ID :</h1>
        <input
          type="text"
          required
          name="ID"
          v-model="posting.user_id"
          class="elevation-3 white"
        />
      </div>
      <div class="write_title d-flex mt-10 ml-10 align-center">
        <h1 class="text-right mr-5">PW :</h1>
        <input
          type="password"
          required
          name="PW"
          v-model="posting.password"
          class="elevation-3 white"
        />
      </div>
      <div class="write_title d-flex mt-10 ml-10 align-start">
        <h1 class="text-right mr-5">설명 :</h1>
        <textarea
          required
          name="description"
          v-model="posting.description"
          class="elevation-3 white"
        ></textarea>
      </div>
      <v-btn color="primary" elevation="2" tile type="submit" class="my-10"
        >등록하기</v-btn
      >
    </form>
  </v-card>
</template>

<script>
export default {
  created() {
    this.$http.get(`/posting/allList`).then((response) => {
      this.posting.data_id = response.data.length + 1;
    });
  },
  data() {
    return {
      posting: {
        data_id: 0,
        title: "",
        description: "",
        user_id: "",
        password: "",
        upload_date: "",
        visible: true,
      },
    };
  },
  methods: {
    upload: function () {
      const date = new Date();

      this.posting.upload_date = `${date.getFullYear()}-${(
        "0" +
        (date.getMonth() + 1)
      ).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;

      this.$http
        .post("/posting/write", this.posting)
        .then((response) => {
          alert("게시글이 등록되었습니다.");
        })
        .catch((error) => {
          alert("게시글을 등록하지 못했습니다.");
        });
      this.$router.push({
        name: "Posting",
      });
    },
  },
};
</script>

<style lang="scss">
.write-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    div {
      h1 {
        width: 15rem;
      }

      input {
        width: 60rem;
        height: 2rem;
        padding: 3px 0 2px 10px;
      }

      textarea {
        font-size: 1rem;
        height: 20rem;
        width: 60rem;
        resize: none;
        padding: 5px;
      }
    }
  }
}
</style>
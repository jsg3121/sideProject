<template>
  <div class="write-container">
    <form method="post" @submit.stop.prevent="upload">
      <div class="write_title d-flex mt-10">
        <h1>제목 :</h1>
        <input
          type="text"
          required
          name="title"
          v-model="posting.title"
          class="elevation-3"
        />
      </div>
      <div class="write_title d-flex mt-10">
        <h1>ID :</h1>
        <input
          type="text"
          required
          name="ID"
          v-model="posting.user_id"
          class="elevation-3"
        />
      </div>
      <div class="write_title d-flex mt-10">
        <h1>PW :</h1>
        <input
          type="text"
          required
          name="PW"
          v-model="posting.password"
          class="elevation-3"
        />
      </div>
      <div class="write_title d-flex mt-10">
        <h1>설명 :</h1>
        <input
          type="text"
          required
          name="description"
          v-model="posting.description"
          class="elevation-3"
        />
      </div>
      <button type="submit">등록하기</button>
    </form>
  </div>
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

<style>
</style>
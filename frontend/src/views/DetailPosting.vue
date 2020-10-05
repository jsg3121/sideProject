<template>
  <div class="detail-container">
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
</template>

<script>
export default {
  created() {
    let data = this.$route.params.data;
    this.$http.get(`/posting/detail/${data}`).then((response) => {
      this.detail = response.data[0];
    });
  },
  data() {
    return {
      detail: {},
    };
  },
};
</script>

<style>
</style>
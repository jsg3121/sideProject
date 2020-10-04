<template>
  <div class="posting-container">
    <h1>게시판</h1>
    <div class="inner-container">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="list in posting" :key="list.data_id">
              <td>{{ list.data_id }}</td>
              <td>{{ list.title }}</td>
              <td>{{ list.user_id }}</td>
              <td>{{ list.upload_date }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$http.get("/posting").then((response) => {
      this.posting = response.data;
    });
  },
  data() {
    return {
      posting: [],
    };
  },
};
</script>

<style lang="scss">
</style>
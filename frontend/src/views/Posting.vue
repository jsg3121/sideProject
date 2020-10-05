<template v-slot:default>
  <div class="posting-container">
    <h3 class="text-h3 text-center mt-5">게시판</h3>
    <div class="inner-container">
      <v-simple-table>
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
table {
  tbody {
    tr {
      td {
        text-align: center;

        &:nth-child(2) {
          text-align: left;
        }
      }
    }
  }
}
</style>

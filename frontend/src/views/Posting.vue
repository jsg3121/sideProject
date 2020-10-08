<template v-slot:default>
  <div class="posting-container">
    <h3 class="text-h3 text-center mt-5">게시판</h3>
    <router-link :to="{ name: 'Write' }">새 글 작성하기</router-link>
    <div class="inner-container">
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-center">번호</th>
            <th class="text-center">제목</th>
            <th class="text-center">작성자</th>
            <th class="text-center">날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="list in posting"
            :key="list.data_id"
            @click="detailPosting(list.data_id)"
          >
            <td class="text-center">{{ list.data_id }}</td>
            <td>{{ list.title }}</td>
            <td class="text-center">{{ list.user_id }}</td>
            <td class="text-center">{{ list.upload_date }}</td>
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
      response.data.reverse();
      this.posting = response.data;
    });
  },
  data() {
    return {
      posting: [],
    };
  },
  methods: {
    detailPosting: function (data) {
      this.$router.push({
        name: "Detail",
        params: { data: data },
      });
    },
  },
};
</script>

<style lang="scss">
</style>

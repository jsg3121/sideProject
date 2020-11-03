<template v-slot:default>
  <div class="posting-container">
    <h3 class="text-h3 text-center mt-5">게시판</h3>
    <h4 v-if="this.$store.state.user">
      {{ this.$store.state.user.user_id }}님 반갑습니다.
    </h4>
    <v-btn
      v-if="this.$store.state.user == ''"
      color="primary"
      elevation="2"
      tile
      @click="login"
    >
      로그인
    </v-btn>
    <v-btn v-else color="primary" elevation="2" tile @click="logout">
      로그아웃
    </v-btn>
    <!-- 새 게시글 추가하기 버튼 -->
    <v-btn color="primary" elevation="2" tile @click="newPosting">
      새 글 작성하기
    </v-btn>
    <!-- 새 게시글 추가하기 -->
    <div class="inner-container">
      <v-simple-table>
        <colgroup>
          <col width="5%" />
          <col width="75%" />
          <col width="10%" />
          <col width="10%" />
        </colgroup>
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
    this.$http.get("/posting").then(response => {
      response.data.reverse();
      this.posting = response.data;
    });
  },
  data() {
    return {
      posting: []
    };
  },
  methods: {
    detailPosting: function(data) {
      this.$router.push({
        name: "Detail",
        params: { data: data }
      });
    },
    // 게시물 작성
    newPosting: function() {
      this.$router.push({
        name: "Write"
      });
    },
    login: function() {
      this.$router.push({
        name: "Login"
      });
    },
    logout: function() {
      this.$store.commit("logout");
    }
  }
};
</script>

<style lang="scss"></style>

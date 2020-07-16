<template>
  <b-container>
    <h1 class="landing-title">
      WYWYF
    </h1>
    <b-container fluid class="page-section card-large mt-5">
      <b-container>
        <div class="center-items center-content">
          <b-btn style="text-align: right" @click="getUsername">
            Create lobby
          </b-btn>
          <LobbyTab></LobbyTab>
          <LobbyTab></LobbyTab>
          <LobbyTab></LobbyTab>
        </div>
      </b-container>
    </b-container>
  </b-container>
</template>

<script>
  import LobbyTab from "../components/LobbyTab";
  const route = "http://localhost:5050"

  export default {
    name: "Home",
    components: {LobbyTab},

    methods: {
      getUsername : function() {
        this.axios.get(route + '/home').then(function (response) {
          console.log(response.data)
          console.log("gotcha")
        })
      }
    }
  }

</script>

<style scoped>

</style>

<template>
  <b-container>
    <h1 class="page-section landing-title">
      WYWYF
    </h1>
    <div class="page-section">
      <div class="card-large center-items center-content">

        <b-card-group class="align-content-center">
          <b-card class="text-center">
            <b-card-body class="text-center">
              <form action="/" class="d-inline-block form-width">
                <b-row class="form-group">
                  <input name="username" value="" type="text" placeholder="Username" class="form-field" id="username" v-model="username"/>
                  <label class="form-label" for="username">Username</label>
                </b-row>
                <b-row class="form-group">
                  <input type="text" placeholder="Lobby url / name (optional)" class="form-field" id="lobby-name" v-model="lobbyName"/>
                  <label class="form-label" for="lobby-name">Lobby url / name (optional)</label>
                </b-row>
                <b-row class="mt-4 form-group">
                  <input type="password" placeholder="Lobby password (optional)" class="form-field" id="lobby-password" v-model="lobbyPassword"/>
                  <label class="form-label" for="lobby-password">Lobby password (optional)</label>
                </b-row>
              </form>
            </b-card-body>
            <template v-slot:footer>
              <b-button type="submit" class="btn-primary mt-4" @click="goToLobby(username, lobbyName, lobbyPassword)">Watch!</b-button>
            </template>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </b-container>
</template>

<script>
  // @ is an alias to /src
  const route = "http://localhost:5050"

  export default {
    name: 'Login',

    data() {
      return {
        username: '',
        lobbyName: '',
        lobbyPassword: ''
      }
    },

    components: {

    },

    methods: {
      goToHomepage : function(username) {
        this.username = username;
      },

      goToLobby : function(username, lobbyName, lobbyPassword) {
        let vm = this;
        this.username = username;
        this.lobbyName = lobbyName;
        this.lobbyPassword = lobbyPassword;
        var dataObj = {
          username : this.username,
          lobbyName : this.lobbyName,
          lobbyPassword : this.lobbyPassword
        }

        this.axios.post(route + '/home', dataObj).then(function (response) {
          if(response.status === 200) {
            vm.$router.push({ path : '/home' });
          }
        })
      }
    }
  }
</script>

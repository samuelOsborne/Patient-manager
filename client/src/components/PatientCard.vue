<template>
  <div class="container lobby-card mt-3">
    <div class="row justify-content-center">
      <h1 class="text-center">
        {{this.name}} {{this.surname}}
      </h1>
    </div>
    <div class="row mt-4">
      <div class="col" md="6">
        Age: {{this.age}}
      </div>
      <div class="col" md="6">
        Date of birth: {{this.dob}}
      </div>
    </div>
    <b-btn class="text-right round-border mt-4" @click="removePatient()">
      Remove
    </b-btn>
  </div>
</template>

<script>
  const route = "http://localhost:5050"

  export default {
    name: "PatientCard",


    data() {
      return {
        patientName: '',
        patientSurname: '',
        patientAge: 0,
        patientDateOfBirth: ''
      }
    },

    props: {
      name: {
        type: String,
        required: true
      },
      surname: {
        type: String,
        required: true
      },
      age : {
        type: Number,
        required: true
      },
      dob : {
        type: String,
        required: true
      },
      id : {
        type: String,
        required: true
      }
    },
    methods : {
      removePatient : function() {
        let vm = this
        console.log(this.id)

        this.axios.delete(route + '/home', { data: { id: this.id } }).then(function (response) {
          if(response.status === 202) {
            vm.$router.go()
          }
          else
            console.log(response.status)
        })
      }
    }
  }
</script>

<style scoped>

</style>

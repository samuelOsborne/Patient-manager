<template>
  <b-container>
    <h1 class="landing-title">
      Patient Sense
    </h1>
    <b-container fluid class="page-section card-large mt-5">
      <b-container>
        <div class="center-items center-content">
          <div class="text-align-right">
            <b-btn @click="showModal" class="round-border">
              Add patient
            </b-btn>
          </div>

          <b-modal ref="add-patient-modal" hide-footer title="Add patient">
            <div class="d-block">
              <b-card>
                <b-card-body class="text-left">
                  <form class="d-inline-block form-width">
                    <b-row v-if="errors.length">
                      <div>
                        <b>Please correct the following error(s):</b>
                        <ul>
                          <li v-for="error in errors" :key="error" class="color-light-red">
                            {{ error }}
                          </li>
                        </ul>
                      </div>
                    </b-row>
                    <b-row class="form-group">
                      <input required name="new-patient-name" value="" type="text" placeholder="Name" class="form-field" id="new-patient-name" v-model="newPatientName"/>
                      <label class="form-label" for="new-patient-name">Name</label>
                    </b-row>
                    <b-row class="form-group">
                      <input required name="new-patient-surname" value="" type="text" placeholder="Surname" class="form-field" id="new-patient-surname" v-model="newPatientSurname"/>
                      <label class="form-label" for="new-patient-surname">Surname</label>
                    </b-row>
                    <b-row class="form-group">
                      <input required name="new-patient-age" value="0" type="number" placeholder="0" class="form-field" id="new-patient-age" v-model="newPatientAge"/>
                      <label class="form-label" for="new-patient-age">Age</label>
                    </b-row>
                    <b-row class="form-group">
                      <input required name="new-patient-date-of-birth" value="" type="date" placeholder="0" class="form-field" id="new-patient-date-of-birth" v-model="newPatientDateOfBirth"/>
                      <label class="form-label" for="new-patient-date-of-birth">Date Of Birth</label>
                    </b-row>
                  </form>
                </b-card-body>
              </b-card>
              <b-button class="mt-3 text-center justify-content-center" @click="addPatient">
                Add
              </b-button>
            </div>
          </b-modal>

          <div v-for="(patient, i) in patients" :key="`${i}`">
            <PatientCard :name=patient.name :surname=patient.surname :age=patient.age :dob=patient.dob :id=patient._id></PatientCard>
          </div>

        </div>
      </b-container>
    </b-container>
  </b-container>
</template>

<script>
  import PatientCard from "../components/PatientCard";
  const route = "http://localhost:5050"

  export default {
    name: "Home",
    components: {PatientCard},

    data() {
      return {
        loading: false,
        errors: [],
        patients: [],
        newPatientName: '',
        newPatientSurname: '',
        newPatientAge: 0,
        newPatientDateOfBirth: ''
      }
    },

    created() {
      this.getPatients();
    },

    methods: {
      getPatients : function() {
        let vm = this

        this.loading = true
        this.axios.get(route + '/home').then(function (response) {
          console.log(response.data)
          vm.patients = response.data
          vm.loading = false
        })
      },

      checkForm: function() {
        if (this.newPatientName && this.newPatientSurname && this.newPatientAge && this.newPatientDateOfBirth)
          return true;

        this.errors = [];

        if (!this.newPatientName)
          this.errors.push('Name required.');
        if (!this.newPatientSurname)
          this.errors.push('Surname required.');
        if (!this.newPatientAge)
          this.errors.push('Age required.');
        if (!this.newPatientDateOfBirth)
          this.errors.push('Date of birth required.');
        return false
      },

      addPatient: function(e) {
        if (this.checkForm(e) === false)
        {
          e.preventDefault()
          return false
        }

        let vm = this
        //post to route
        var dataObj = {
          name : this.newPatientName,
          surname: this.newPatientSurname,
          age: this.newPatientAge,
          dob: this.newPatientDateOfBirth
        }

        this.axios.post(route + '/home', dataObj).then(function (response) {
          if(response.status === 201) {
            vm.$router.go()
          }
          else {
            console.log(response)
          }
        })
        this.hideModal()
      },

      showModal: function() {
        this.$refs['add-patient-modal'].show()
      },

      hideModal: function() {
        this.$refs['add-patient-modal'].hide()
      },
    }
  }

</script>

<style scoped>

</style>

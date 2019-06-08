<template>
  <div id="register-form">
    <form>
      <table>
        <tr>
          <td>First Name :</td>
          <td>
            <input type="text" v-model="user.firstName">
          </td>
        </tr>
        <tr>
          <td>Last Name :</td>
          <td>
            <input type="text" v-model="user.lastName">
          </td>
        </tr>
        <tr>
          <td>Gender :</td>
          <td>
            <input type="radio" name="gender" value="M" v-model="user.gender"> M
            <input type="radio" name="gender" value="F" v-model="user.gender"> F
          </td>
        </tr>
        <tr>
          <td>State :</td>
          <td>
            <select v-model="selectedState">
              <option v-for="(adr, index) in user.state" :key="index" :value="adr">{{adr}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>City :</td>
          <td>
            <select v-model="selectedCity">
              <option v-for="(city, index) in cities" :key="index">{{city}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Interests :</td>
          <td>
            <template v-for="(int, index) in user.interests" :keys="index">
              <input type="checkbox" :value="int" v-model="interests" :key="int">
              {{int}}
            </template>
          </td>
        </tr>
        <tr>
          <td>
            <button @click.prevent="submitForm">Submit Form</button>
          </td>
        </tr>
      </table>
    </form>
    <hr>
    <div v-if="userRegistered">
      <p>
        Hello
        <span v-show="user.gender == 'M'">Mr.</span>
        <span v-show="user.gender == 'F'">Ms.</span>
        {{ user.firstName + " " + user.lastName}},
        You are living in {{selectedCity}}, {{ selectedState}}.
        <br>
        You like :
        <ul>
            <li v-for="int in interests" :key="int"> {{ int }}</li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        gender: ["M", "F"],
        state: ["MH", "TN"],
        interests: ["Movie", "Sports", "Politics"]
      },
      selectedState: "MH",
      selectedCity: "",
      userRegistered: false,
      interests: []
    };
  },
  computed: {
    cities() {
      if (this.selectedState == "MH") {
        return ["Mumbai", "Pune"];
      } else if (this.selectedState == "TN") {
        return ["Chennai", "Madhurai"];
      } else {
        return [];
      }
    }
  },
  methods: {
    submitForm() {
      this.userRegistered = true;
    }
  }
};
</script>

<style lang="">
#register-form {
  display: block;
  border: 2px grey solid;
  box-shadow: 1px 1px 2px black;
  background-color: #ccc;
  margin: 30px auto;
  justify-items: center;
}
</style>
<template>
  <div>
    <h3>User Edit</h3>
    <button @click="navigateToHome">Home</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "Test"
    };
  },
  methods: {
    navigateToHome() {
      this.$router.push("/");
    }
  },
  beforeRouteEnter(to, from, next) {
    // console.log(this.test);     //?
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log(this.test);
    if (confirm("DO you want to navigate from here?")) {
      next();
    } else {
      next(false);
    }
  }
};
</script>
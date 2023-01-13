<template>
  <div>
    <h1>Home test...</h1>
    <router-link to="/about" class="a">About</router-link>
  </div>

</template>

<script>
export default {
  name: 'HomePage',
  computed() {
    console.log("here",this.$route);
  }
}
</script>

<style scoped>
  .a {
    cursor: pointer;
  }
</style>
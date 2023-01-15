<template>
  <div>
    <h1>Home test...</h1>
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
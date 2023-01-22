<template>
  <div class="cards">
      <h3>{{ tempDate }}</h3>
      <p>{{ minTemp }}</p>
      <p>{{ maxTemp }}</p>
  </div>
</template>

<script>
export default {
    name: 'DiaplayTemp',
    props: ['date',',max','min'],
    data() {
        return {

        }
    },
    computed: {
        tempDate() {
            return this.date;
        },
        minTemp() {
            return this.min;
        },
        maxTemp() {
            return this.max;
        }
    }
}
</script>

<style scoped>


</style>
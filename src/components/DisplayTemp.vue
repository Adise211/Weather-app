<template>
    <v-card elevation="8" width="250" height="250">
        <v-card-title>{{ tempDate }}</v-card-title>
        <v-card-text>{{ minTemp }}° - {{ maxTemp }}°</v-card-text>
        <p align="center" class="mt-1">{{ iconText }}</p>
        <img 
            class="card-img"
            :src="tempIcon"  
            height="80" 
            width="80"
        />
    </v-card>
</template>

<script>
import moment from 'moment';

export default {
    name: 'DiaplayTemp',
    props: ['date','max','min', 'icon', 'iconText'],
    data() {
        return {

        }
    },
    computed: {
        tempDate() {
            return moment(this.date).format("dddd");
        },
        minTemp() {
            return this.min;
        },
        maxTemp() {
            return this.max;
        },
        tempIcon() {
            return `https://www.accuweather.com/images/weathericons/${this.icon}.svg`;
        },
    },
}
</script>

<style scoped>
    .card-img {
    margin-left: 90px;
    margin-top: 15px;
    }
    .iconTxt {
        color: blue;
    }

</style>
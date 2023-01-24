<template>
  <div>
    <div class="container">
      <div class="input-1"> 
          <label for="select-city">City: </label>
          <input 
            type="text" 
            id="select-city" 
            @input="searchCity" 
            list="select-city" 
            placeholder="Enter The City Name"
            v-model="selectedCity"
          />
          <datalist id="select-city">
            <option
              class="auto-list"
              v-for="city in citiesList" 
              :value="city.LocalizedName" 
              v-bind:key="city.Key"
            >
              {{ city.LocalizedName }}
            </option>
          </datalist>
      </div>
      <div class="input-2">
        <label>Days: </label>
        <select for="days" id="select-days" @change="onSelectDays">
          <option value=""></option>
          <option value="1">1</option>
          <option value="5">5</option>
        </select>
      </div>
      <button @click="onSearch" class="search-btn">Search</button>
    </div>
    <div v-if="showCards" class="cards">
      <diaplay-temp
          v-for="day in myValue"
          :key="day.Date"
          :date="day.Date"
          :max="day.Temperature.Maximum.Value"
          :min="day.Temperature.Minimum.Value"
          :icon="day.Day.Icon"
          :iconText="day.Day.IconPhrase"
        >
        </diaplay-temp>
    </div>
  </div>

</template>

<script>
import { searchCities } from '../api.js'; 
import { mapGetters } from 'vuex';
import DiaplayTemp from '../components/DisplayTemp.vue';

export default {
  name: 'HomePage',
  components: { DiaplayTemp },
  data() {
    return {
      enterValue: '',
      citiesList: [],
      selectedCity: '',
      days: '',
      showCards: false
    }
  },
  methods: {
    async searchCity(e) {
      const name = e.target.value;
      // if (name !== '' ) {
        const result = await searchCities(name);
        this.citiesList = result
        console.log("result",this.citiesList);

      // } else {
      //   confirm("Please enter a value");
      // }
    },
    onSelectDays(e) {
      const { value } = e.target;
      if (value !== "") {
        this.days = value;
      } else {
        confirm("Please pick days");
      }
    },
    onSearch() {
      if (this.days !== "" && this.selectedCity !== '') {
        this.$store.dispatch('fetchForecastByDays', { days: this.days, cityKey: this.citiesList[0].Key });
      } else {
        confirm("Please make sure that you enterd values in all inputs!")
      }
    }
  },
  computed: {
      ...mapGetters(['forecastDays']),    
      myValue() {
        return this.forecastDays.DailyForecasts;
      }  
  },
  watch: { // watch the chamges that made in some data we want
    myValue(newDate) {
      if (newDate) {
        this.showCards = true;
      
      }
    }
  }

}
</script>

<style scoped>
  .a {
    cursor: pointer;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
  }
  .input-1, .input-2 {
    margin-right: 50px;
  }
  #select-city, #select-days {
    padding: 5px;
  }
  #select-city {
    width: 200px;
  }
  .auto-list {
    color: aqua;
  }
  .cards {
      margin-top: 100px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      margin-left: 30px;
      margin-right: 30px;
  }
  .card-img {
    margin-left: 90px;
    margin-top: 30px;
  }
  .search-btn {
    background-color: rgb(92, 128, 207);
    padding: 10px;
    border-radius: 10px;
    color: white;
  }
  .search-btn:active {
    color: black;
  }
  
  
</style>
<template>
  <div class="container">
    <div class="input-1"> 
        <label for="select-city">City: </label>
        <input 
          type="text" 
          id="select-cit" 
          @input="searchCity" 
          list="select-city" 
          placeholder="Enter City"
          v-model="selectedCity"
        />
        <datalist id="select-city">
          <option
            class="auto-list"
            :value="city.LocalizedName" 
            v-for="city in citiesList" 
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
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
    <button @click="onSearch">Search</button>
  </div>

</template>

<script>
import { searchCities } from '../api.js'; 
import { mapGetters } from 'vuex';

export default {
  name: 'HomePage',
  data() {
    return {
      enterValue: '',
      citiesList: [],
      selectedCity: '',
      days: '',
      anableToSearch: false,
      displayResult: []
    }
  },
  methods: {
    async searchCity(e) {
      const name = e.target.value;
      if (name !== '' ) {
        const result = await searchCities(name);
        this.citiesList = result

      } else {
        confirm("Plase enter a value");
      }
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
        this.$store.dispatch('fetchForecastByDays', { days: this.days, cityKey: '215854' });
      } else {
        console.log("searching for result! ....", this.$store.state.forecast);

      }
    }
  },
  computed: {
      ...mapGetters(['forecastDays']),      
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
  
</style>
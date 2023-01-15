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
      <select for="days" id="select-days">
        <option>10</option>
        <option>7</option>
        <option>3</option>
      </select>
    </div>
    <button>Search</button>
  </div>

</template>

<script>
import { searchCities } from '../api.js'; 
export default {
  name: 'HomePage',
  data() {
    return {
      enterValue: '',
      citiesList: [],
      selectedCity: '',
      days: ''
    }
  },
  methods: {
    async searchCity(e) {
      const name = e.target.value;
      if (name !== '' ) {
        const result = await searchCities(name);
        this.citiesList = result

      } else {
        alert("Plase enter a value")
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
  
</style>
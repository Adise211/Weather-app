<template>
    <div class="navbar-wrapper">
        <div class="brand">
            <h1>MyWeatherApp</h1>
            <img :src="logoURL"/>
        </div>
        <div class="links-wrapper">
            <ul>
                <li><router-link to="/home">Home</router-link></li>
                <li><router-link to="/favorites">Favorites</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
import logo from '../assets/images/sunLogo.png';
export default {
    name: 'NavBar',
    data() {
        return {
            logoURL: ''
        }
    },
    mounted() {
        this.logoURL = logo
    }
}
</script>

<style scoped>
    .navbar-wrapper {
        border-bottom: 1px grey solid;
        height: 100px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .brand {
        position: relative;
        width: 50%;
        margin-right: 130px;
    }

    img {
        height: 80px;
        width: 80px;
        position: relative;
        bottom: 80px;
        right: 90px;
    }

    a {
        text-decoration: none;
        color: black;
    }

    a:hover {
        color: rgb(169, 82, 169);
    }

    a.active-link {
        border: 1px black solid;
        padding: 10px;
        background-color: antiquewhite;
    }

    ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        height: 80px;
        width: 80%;
        justify-content: flex-end; 
        margin-top: 30px;       
    }

    li {
        text-align: left;
        margin-left: 60px;
        font-size: 18px;
        font-weight: bold;

    }

</style>
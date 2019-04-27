<template>
    <header class="header">
        <div>
            <img align="right" src="../../assets/hok1.png" width=70px height=70px>
            <img align="left" src="../../assets/hok2.png" width=70px height=64px>
            <h1>Tagtical Hockey</h1>
        </div>
        <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/events">Events</router-link>|
            <router-link to="/about">About</router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>


<style scoped>

    .header{
        position:relative;
        background: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
    }

    .header a{
        color: #fff;
        padding-right: 5px;
        text-decoration: none;
    }
</style>


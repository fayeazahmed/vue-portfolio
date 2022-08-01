<template>
    <nav class="nav">
        <router-link to="/">Profile</router-link>
        <router-link to="/contact">Contact</router-link>
    </nav>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: 'Nav',
}
</script>

<style scoped>
    .nav {
        background: linear-gradient(to right top, #75ff7c, #9de069, #edf851);
    }

    .router-link-active {
        background-color: white;
    }

    a {
        font-family: "Architects Daughter", cursive;
        text-decoration: none;
        color: black;
        margin: 10px;
        font-size: 19px;
        padding: 6px;
        border-radius: 8px;
        transition: all .15s;
    }

    a:hover {
        background-color: white;
    }
</style>
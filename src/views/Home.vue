<template>
    <div>
        <div class="d-flex flex-column align-items-center">
            <img src="../assets/dp.jpg" alt="picture" />
            <h6><i class="fa fa-map-marker"></i> Mohakhali, Dhaka</h6>
        </div>
        <p class="intro mt-2">Hello, I'm Ahmed. Final year CSE student at AIUB. This portfolio site features some of the web projects and related skills I worked on for an assessment purpose. (<a href="https://fayeazahmed.github.io/">All projects here</a> <i class="fa fa-external-link h6" aria-hidden="true"></i>)</p>
        <Projects />
    </div>
</template>

<script>
import Projects from "../components/Projects.vue"

export default {
    // eslint-disable-next-line
    name: 'Home',
    components: {
        Projects
    }
}
</script>

<style scoped>

    img {
        height: 150px;
        border-radius: 50%;
    }
    
    .intro {
        font-family: monospace;
        font-size: 22px;
    }
</style>
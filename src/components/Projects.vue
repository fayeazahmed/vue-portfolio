<template>
    <div class="projects">
        <!-- Show list of projects if nothing is selected  -->
        <div v-if="$store.state.selected === false">
            <div @click="$store.dispatch( 'selectProject', { id: item.id})" class="content" :key="item.id" v-for="item in projects">
                <p class="content__title">{{ item.title }}</p>
                <div class="stack border-0 d-flex">
                    <p :key="s" v-for="s in item.image">{{ s }}</p>
                </div>
            </div>
        </div>
        <!-- Show detail of a project if one is selected  -->
        <div class="project" v-else>
            <div class="d-flex align-items-center mb-2">
                <button class="btn btn-outline-success btn-sm" @click="$store.commit('deSelectProject')">
                    <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
                </button>
                <h3 class="m-0 ms-2">{{$store.state.project.title}}</h3>
                <a :href="$store.state.project.link">Visit</a>
                <a :href="$store.state.project.git">Source</a>
            </div>
            <div class="d-flex stack">
                <p :key="s" v-for="s in $store.state.project.image">{{ s }}</p>
            </div>
            <div class="d-flex align-items-center project__details">
                <p>{{ $store.state.project.description }}</p>
                <img :src="'https://fayeazahmed.github.io/assets/projects/' + $store.state.project.ss" :alt="$store.state.project.ss">
            </div>
        </div>
    </div>
</template>

<script>
import projects from "../assets/data"

export default {
    // eslint-disable-next-line
    name: 'Projects',
    data() {
        return {
            projects
        }
    }
}
</script>

<style scoped>
    .content {
        display: flex;
        align-items: center;
        border-left: 2px solid #3c8540;
        margin-top: 15px;
        padding: 7px 0;
        cursor: pointer;
        transition: all .15s;
    }

    .content:hover {
        background-color: #d2f58a;
    }

    .content p {
        margin: 0;
    }

    .content__title {
        font-size: 25px;
        border-right: 2px solid #3c8540;
        padding: 0 10px;
    }

    .stack p {
        font-family: Trebuchet MS;
        padding: 0 4px;
        font-size: 15px;
        font-style: italic;
        font-weight: 800;
        color: #157259;
    }

    .project i {
        font-size: 31px;
        cursor: pointer;
    }

    .project a {
        font-size: 20px;
        text-decoration: none;
        margin-left: 16px;
    }

    .project__details p {
        font-size: 20px;
        padding-right: 34px;
        text-align: justify;
    }

    .project__details img {
        height: 300px;
        padding-right: 34px;
        text-align: justify;
    }
</style>

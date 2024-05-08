<template>
    <div class="container home">
        <div class="logo">
            <h1>MorningPuzzles</h1>
        </div>
        <div class="card-game-content">
            <cardGame v-for="name in games" :key=name :name="name" />
        </div>
    </div>
</template>

<script>
import cardGame from "../components/home/cardGame.vue"

export default{
    name: "HomeView",
    data(){
        return{
            games: ["sudoku", "forca"]
        }
    },
    components: {
        cardGame
    }
}
</script>

<style>
.home.container{
    justify-content: space-evenly;
    align-items: center ;
}

.card-game-content{
    display: flex;

    gap: 1rem;
}
</style>
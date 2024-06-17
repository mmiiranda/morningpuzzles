<template>
    <div class="card-game-content">
        <cardGame v-for="name in games" :key=name :name="name" />
    </div>
</template>

<script>
    import cardGame from "./cardGame.vue"

    export default {
        name: "cardGamesMenu",
        data(){
            return{
                games: ["sudoku", "forca"]
            }
        }   ,
        components:{
            cardGame
        }    
    }
</script>

<style>
.card-game-content{
    display: flex;

    gap: 1rem;
}
</style>
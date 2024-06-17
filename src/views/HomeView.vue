<template>
    <div class="container home">
        <div class="logo">
            <h1>MorningPuzzles</h1>
        </div>
        <cardGamesMenu />
    </div>

</template>

<script>
import cardGamesMenu from "@/components/cards/card-games-menu"

export default{
    name: "HomeView",
    components: {
        cardGamesMenu
    }
}
</script>

<style>
.home.container{
    justify-content: space-evenly;
    align-items: center ;
}
</style>
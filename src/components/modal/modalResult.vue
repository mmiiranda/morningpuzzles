<template>
    <modalContent id="modal-result">
        <div class="modal-header">
            <h1> {{ title }} </h1>
        </div>
        <div class="modal-main">
            <h2>
                <span> {{ message }} </span> <br>
                Coloque suas habilidades em prártica em outros puzzles
            </h2>
            <cardGamesMenu />
            <div class="modal-footer">
                <a @click="toogleModal" href="#">Ver Sudoku</a>
            </div>
        </div>
        <canvas id="my-canvas"></canvas>
    </modalContent>
</template>

<script>
    import modalContent from "./modalContent.vue"
    import cardGamesMenu from "@/components/cards/card-games-menu"
    import ConfettiGenerator from "confetti-js";

    export default {
        name: "modalResult",
        data(){
            return{
                title: "Eita Como é Gênio",
                message: "Você completou esse puzzle"
            }
        },
        components: {
            modalContent,
            cardGamesMenu
        },
        mounted(){
            var confettiSettings = {"target":"my-canvas","max":"100","size":"1","animate":true,"props":["circle","square","line"],"colors":[[0,0,0]],"clock":"100","rotate":true,"width":"1920","height":"968","start_from_edge":false,"respawn":true};
            var confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
        },  
        methods: {
            toogleModal(){
                document.querySelector("#modal-result").classList.toggle("active")
            }   
        },
    }
</script>

<style>
.modal-header{
    width: 100%;
    padding: .8rem;

    background-color: #000;

    display: grid;
    place-items: center;

}

.modal-header h1{
    font-size: 4rem;

    background-color: #fff;

    padding: .5rem 1.5rem;
}

.modal-main{
    display: flex;
    flex-direction: column  ;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    text-align: center;

    margin: auto;
}

.modal-main h2{
    color: #0000009a;
    font-size: 2rem;
}

.modal-footer{
    position: absolute;

    bottom: 5%;
    right: 5%;
}

.modal-footer a{
    color: #000;
    
    font-size: 1.5rem;
}

#modal-result canvas{
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    pointer-events: none;
}
</style>
<template>
  <div id="app">
      <div class="container">
        <form>
          <div class="logo">
            <h1>MoringPuzzle</h1>
          </div>
        
          <matrixContent />

          <div class="buttons-content">
            <inputButton name="Submeter" />
          </div>
        </form>
      </div>
      <timerContent id="timer" />
  </div>
</template>

<script>
  import  inputButton  from "./components/input/button.vue";
  import  timerContent  from "./components/timer.vue";
  import matrixContent from "./components/miniMatrix.vue";

  export default {
      name: "App",
      components: {
        inputButton,
        timerContent,
        matrixContent
      }
  }
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: "Monomaniac One", sans-serif;
  }

  :root{
      --bg-color: #fff;
      --tx-color: #000;

      --btn-bg-color: #000;
      --btn-tx-color: #fff;
  }

  #app{
    height: 100dvh;
    background: var(--bg-color);
    color: var(--tx-color);

    display: grid;
    place-items: center;
  }

  .container{
    display: flex;
    flex-direction: column;

    height: 100%;

    padding: 1rem 0;
  }

  .container form{
    height: 100%;

    display: flex;
    flex-direction: column;
    
    justify-content: space-around;
    align-items: center ;
  }

  .button-content{
      text-align: center;
  }

  #timer{
      position: absolute;

      right: 2%;
      bottom: 2%;
  }
</style>
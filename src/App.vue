<template>
  <div id="app">
      <div class="container">
        <form @submit="submitMatrix">
          <div class="logo">
            <h1>MoringPuzzle</h1>
          </div>
        
          <matrixContent ref="matrixRef"/>

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
  import matrixContent from "./components/Matrix.vue";

  export default {
      name: "App",
      components: {
        inputButton,
        timerContent,
        matrixContent
      },
      data(){
        return {
          complete: false,
          isCorrect: false
        }
      },
      methods:{
          submitMatrix(event){
            event.preventDefault();

            try{
              let submitMatrix = this.$refs.matrixRef.getMatrix()

              fetch('https://morningpuzzlesapi.onrender.com/api/sudoku/submit', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(submitMatrix)
              }).then(res => res.json())
                .then(data =>{
                  if(data.isCorrect) alert("EITA COMO É GENIO")
                  else alert("WRONG ANSWER")
                }).catch(error => {
                  console.error('Erro na requisição fetch:', error);
              })

            } catch(error){
                alert(`${error.message}`)
            }
          },
          
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
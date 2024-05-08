<template>
        <div class="container">
          <form @submit="submitMatrix">
            <div class="logo">
              <h1>MornigPuzzle</h1>
            </div>
          
            <matrixContent ref="matrixRef"/>
  
            <div class="buttons-content">
              <inputButton name="Submeter" />
            </div>
          </form>
        </div>
        <timerContent/>
  </template>
  
  <script>
    import  inputButton  from "../components/input/button.vue";
    import  timerContent  from "../components/timer.vue";
    import matrixContent from "../components/matrix/Matrix.vue";
  
    export default {
        name: "SudokuView",
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
  
  <style>
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
  </style>
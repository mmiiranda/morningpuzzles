<template>
    <div id="matrix">
        <div v-if="loading">
            <div class="loader">

            </div>
        </div>
        <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="matrix-row">
            <div v-for="(element, columnIndex) in row" :key="columnIndex" class="matrix-element">
                <div v-if="element == 0">
                    <input type="text"  @keypress="validKey(rowIndex, columnIndex,$event)" :id="`input-matrix-${rowIndex}-${columnIndex}`" autocomplete="off">
                    <div :id="`matrix-${rowIndex}-${columnIndex}`" class="matrix-cell" hidden ></div>
                </div>
                <div v-else :id="`matrix-${rowIndex}-${columnIndex }`" class="matrix-cell unchanged">
                    {{ element }}
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
    export default {
        name: "matrixContent",
        data(){
            return{
                grid: [],
                loading: true
            }
        },
        async created() {
            try {
                let response = await fetch('https://morningpuzzlesapi.onrender.com/api/sudoku/today');
                if (!response.ok) {
                    throw new Error('Não foi possível obter os dados');
                }
                let data = await response.json();
                this.grid = data.grid;
            } catch (error) {
                console.error('Erro ao obter os dados:', error);
            }
            finally{
                this.loading = false
            }
        },
        methods:{
            validKey(rowIndex, columnIndex ,event){
                let tecla = event.key;
                
                document.querySelector(`input#input-matrix-${rowIndex}-${columnIndex}`).value = "";

                if ((isNaN(tecla) || tecla < '1' || tecla > '9')) {
                    event.preventDefault();
                }else{
                    document.querySelector(`#matrix-${rowIndex}-${columnIndex}`).innerHTML = tecla
                }
            },
            getMatrix(){
                let matrix = {grid: [[],[],[],[],[],[],[],[],[]]}

                let matrixElements = document.querySelectorAll(".matrix-cell")
                let ind = 0;

                    for(let i = 0; i < 9; i++){
                        for(let c = 0; c < 9; c++){
                            if(matrixElements[ind].innerHTML == 0){
                                throw new Error("Existe um campo vazio")
                            }
                            matrix.grid[i][c] = parseInt(matrixElements[ind].innerHTML);
                            ind++;
                        }
                    } 

                    return matrix;
            },
            errorMatrix(){
                let matrix = document.querySelector("#matrix")

                matrix.classList.add("error");

                setTimeout(()=>{
                    matrix.classList.remove("error");
                }, 200)

            }
        }
    }
</script>

<style >
#matrix{
    --border-color: #000000;
    --txt-color: #000000;

    display: flex;
    flex-direction: column;

    color: var(--txt-color);

}

#matrix.error{
    --border-color: #db0303;
    --txt-color: #960303;
}

.error{
    animation: error .2s forwards;
}

@keyframes error{
    0% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    50% { transform: translateX(10px); --border-color: #910000;}
    75% { transform: translateX(-10px); }
    100% { transform: translateX(0); }
}

#matrix input{
    border: none;

    font-size: 2rem;

    width: 3rem;

    text-align: center;
}

.matrix-row{
    display: flex;
}

.matrix-row:nth-child(3n){
    border-bottom: 5px solid var(--border-color);   
}

.matrix-row:last-child{
    border-bottom: none;   
}


.matrix-row:last-child .matrix-element{
    border-bottom: none;
}

.matrix-element{
    border-bottom: 1px solid #777777;
    border-left: 1px solid #777777;
    text-align: center;

    font-size: 2rem;
    width: 5rem;
    height: 100%;

    padding: .5rem;
}

.matrix-element:nth-child(3n){
    border-right: 5px solid var(--border-color);
}

.matrix-element:first-child{
    border-left: none;
}

.matrix-element:last-child{
    border-right: none;   
}

.matrix-element .unchanged{
    background-color: #c1c1c1;
    cursor: context-menu;
}

.loader{
    width: 7.5rem;
    height: 7.5rem;

    border: .75rem solid #9e9e9e;
    border-bottom-color: #000;
    border-radius: 100%;

    animation: loading .5s infinite;
}

@keyframes loading {
    to{
        transform: rotate(360deg);
    }
}
</style>
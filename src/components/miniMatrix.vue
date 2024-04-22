<template>
    <div id="matrix">
        <div v-for="(row, rowIndex) in test" :key="rowIndex" class="matrix-row">
            <div v-for="(element, columnIndex) in row" :key="columnIndex" class="matrix-element">
                <div v-if="element == 0">
                    <input type="text"  @keypress="validKey(rowIndex, columnIndex,$event)" :id="`input-matrix-${rowIndex}-${columnIndex}`">
                    <div :id="`matrix-${rowIndex}-${columnIndex}`" hidden>0</div>
                </div>
                <div v-else :id="`matrix-${rowIndex}-${columnIndex }`" class="unchanged">
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
                test: 
                [
                    [ 4, 1, 0, 5, 0, 0, 6, 0, 8 ],
                    [ 0, 0, 5, 0, 4, 0, 8, 0, 9 ],
                    [ 4, 0, 8, 1, 3, 6, 0, 2, 5 ],
                    [ 2, 7, 0, 4, 0, 4, 0, 3, 2 ],
                    [ 0, 3, 6, 0, 5, 0, 4, 6, 4 ],
                    [ 0, 0, 1, 4, 4, 8, 5, 0, 2 ],
                    [ 8, 0, 1, 5, 0, 0, 0, 0, 0 ],
                    [ 0, 2, 2, 4, 0, 2, 0, 0, 1 ],
                    [ 6, 0, 1, 6, 5, 8, 5, 1, 0 ]
                ]
            }
        },
        methods:{
            validKey(rowIndex, columnIndex ,event){
                let tecla = event.key;
                
                document.querySelector(`input#input-matrix-${rowIndex}-${columnIndex}`).value = "";

                if ((isNaN(tecla) || tecla < '1' || tecla > '9')) {
                    event.preventDefault();
                }else{
                    document.querySelector(`#matrix-${rowIndex}-${columnIndex}`).innerHTML = "tecla"
                }
            }
        },
        mounted(){
            
        }
    }
</script>

<style >
#matrix{
    display: flex;
    flex-direction: column;
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
    border-bottom: 5px solid #000000;   
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
    border-right: 5px solid #000000;
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
</style>
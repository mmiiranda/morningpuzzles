<template>
    <div id="matrix">
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
        <div class="matrix-element">0</div>
    </div>
</template>

<script>
    export default {
        name: "matrixContent"
    }
</script>

<style>
#matrix{
    display: grid; 
    grid-template-columns: repeat(9, 1fr); 
    grid-template-rows: repeat(9, 1fr); 
    width: 400px; 
    height: 400px; 
}

.matrix-element {
    display: flex; 
    justify-content: center; 
    align-items: center;

    border: 1px solid black;
}
</style>
<template>
    <div class="modal-content">
        <div class="modal">
            <slot>
                
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "modalContent" 
    }
</script>

<style>
.modal-content{
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: #00000098;

    display: grid;
    place-items: center;

    opacity: 0;
    visibility: hidden;
}

.modal-content.active{
    opacity: 1;
    visibility: visible;

    transition: all .25s ease-in-out;
}

.modal{
    position: relative;

    display: flex;
    flex-direction: column;

    min-width: 75%;
    min-height: 60%;

    background-color: #fff;

    padding: 2.5rem 0; 

    transform: scale(0);
}

.modal-content.active .modal{
    transform: scale(1);
    transition: all .5s ease-in-out;  
}
</style>
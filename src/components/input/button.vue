<template>
    <button>
        {{ name }}
    </button>
</template>

<script>
    export default {
        name: "inputButton",
        props:{
            name: String
        }
    }
</script>

<style>
button{
    background: var(--btn-bg-color);
    color: var(--btn-tx-color);

    border: none;


    padding: .2rem .5rem;
    font-size: 1.35rem;

    cursor: pointer;
}
</style>
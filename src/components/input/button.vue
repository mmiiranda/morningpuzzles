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
    border-radius: .5rem;

    padding: .2rem .5rem;
    font-size: 1.35rem;

    cursor: pointer;
}
</style>
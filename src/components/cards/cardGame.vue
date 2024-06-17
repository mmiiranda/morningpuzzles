<template>
    <div class="card-game">
        <RouterLink :to="name" class="router-link"> {{ name.toUpperCase() }} </RouterLink>
    </div>
</template>

<script>
    export default {
        name: "cardGame",
        props: {
            name: String
        }
    }
</script>

<style>
.card-game{
    background-color: var(--btn-bg-color);

    padding: .5rem 1.25rem;

    border-radius: .75rem;

    transition: all .2s ease-in;
}

.card-game:hover{
    transform: translateY(-.5rem);
}

.router-link{
    color: var(--btn-tx-color);   

    text-decoration: none;

    font-size: 2rem;
}
</style>
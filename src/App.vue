<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
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
  height: 100vh;
}

.container{
  display: flex;
  flex-direction: column;

  height: 100%;

  padding: 1rem 0;

  animation: container .3s forwards;
}

@keyframes container{
  from{
    opacity: .5;
    transform: translateY(-1rem)
  }
}
</style>

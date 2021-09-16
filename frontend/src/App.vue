<template>
<!--<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  <div> -->
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#btn {
  height: 40px;
  width: 85px;
  margin: 10px;
  padding: 5px;
  border: none;
  border-radius: 10px;
  box-shadow: 3px 3px #dac1c1;
  color: white;
  background-color: #FD2D01;
  font-size: 15px;
    
}

body {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    display: block;
    width: 100%;
}

h1, p, label {
  color: #FD2D01;
}

</style>

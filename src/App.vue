<template>
  <div id="app">
    <transition name="out">
      <router-view class="router" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.out-enter {
  opacity: 0;
  transform: translateX(100%);
}

.out-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.out-enter-active,
.out-leave-active {
  transition: all 0.5s ease;
}

body {
  margin: 0;
  padding: 0;
  background-color: #fff;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  color: black;
}
a:active {
  color: black;
}
</style>

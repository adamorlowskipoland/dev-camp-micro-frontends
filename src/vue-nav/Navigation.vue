<template>
  <ul class="nav">
    <li class="nav__elem" @click="goTo('/')">
      Home
    </li>
    <li class="nav__elem" @click="goTo('/react')">
      Just React
    </li>
    <li class="nav__elem" @click="goTo('/vue')">
      Just Vue
    </li>
  </ul>
</template>
<script>
  export default {
    name: "navigation",
    methods: {
      goTo(target) {
        history.pushState({}, "", target);
      }
    }
  }
</script>
<style>
  .nav {
    padding: 1rem;
    list-style: none;
    display: flex;
  }
  .nav__elem {
    display: inline-block;
    border: 1px solid seagreen;
    padding: 5px;
    flex: 1;
    text-align: center;
  }
  .nav__elem a {
    text-decoration: none;
    text-transform: uppercase;
    color: seagreen;
    font-weight: 700;
    display: block;
  }
</style>

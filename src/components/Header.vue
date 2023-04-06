<script setup></script>

<template>
  <div class="header--component">
    <a href="#">Home 🏠</a>
    <a href="#">Login 🚪</a>
    <a href="#">Favoris ⭐️</a>
  </div>
</template>

<style>
.header--component {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: rgb(252, 70, 107, 1);
  background: radial-gradient(circle, rgb(252, 70, 107, 1) 0%, rgba(252, 70, 107, 1) 100%);
}
.header--component a {
  text-decoration: none;
  margin-left: 30px;
  font-size: 22px;
  color: black;
}
</style>

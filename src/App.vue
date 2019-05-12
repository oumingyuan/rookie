<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">

      <router-link class="navbar-brand" to="/">Logo</router-link>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/begin">起步</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/template">模板语法</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/income">收入</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ExportExcel">导出EXCEL</router-link>
        </li>
      </ul>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

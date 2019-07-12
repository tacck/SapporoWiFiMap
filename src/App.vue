<template>
  <div id="app">
    <Header />
    <Map />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Map from './components/Map'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Map,
    Footer
  }
};
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}
#app {
  display: grid;
  grid-template-rows: 120px 1fr 80px;
}
</style>

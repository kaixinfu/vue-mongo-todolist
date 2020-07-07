<template>
  <div id="app">
    <Spin v-if="isLoading" size="large" fix></Spin>
    <span>vue-mongo</span>
    <span v-for="item in persons" :key="item._id">{{item.name}}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      persons: [],
      isLoading: false
    }
  },
  components: {},
  methods: {
    async fnGetAll() {
      this.isLoading = true
      let res = await this.$api.persons.fnGetAll();
      if (res && res.success) {
        console.log("res", res);
        this.persons = res.result;
      }
      this.isLoading = false
    }
  },
  mounted() {
    this.fnGetAll()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

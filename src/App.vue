<template>
  <div id="app">
    <export-file :tableData="tableData" :columnsData="columnData"></export-file>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ExportFile from './components/ExportFile.vue'

export default {
  name: 'app',

  components: {
    HelloWorld,
    ExportFile
  },

  data () {
    return {
      dd:'search',
      columnData: {
        序号: 'id',
        姓名: 'name',
        地址: 'address',
        爱好: 'hobby',
        年龄: 'age'
      },
      tableData: [
        {id:'one', name: '2', address: '你', hobby: '打篮球',age: 18},
        {id:'1', name: '2', address: '3', hobby: '打台球',age: 25},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'one', name: '2', address: '你', hobby: '打篮球',age: 18},
        {id:'1', name: '2', address: '3', hobby: '打台球',age: 25},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'one', name: '2', address: '你', hobby: '打篮球',age: 18},
        {id:'1', name: '2', address: '3', hobby: '打台球',age: 25},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'one', name: '2', address: '你', hobby: '打篮球',age: 18},
        {id:'1', name: '2', address: '3', hobby: '打台球',age: 25},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'},
        {id:'1', name: '2', address: '3'}
      ]
    }
  },

  mounted () {
    
  },

  methods: {

  }
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

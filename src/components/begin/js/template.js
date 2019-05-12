// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {text: '收入展示'},
        tooltip: {},
        xAxis: {
          data: ['欧明远', '欧明雷', '欧明跃', '丁浩', '目标', '大目标']
        },
        yAxis: {},
        series: [{
          name: '收入',
          type: 'bar',
          data: [11000, 10000, 8000, 8000, 20000, 100000]
        }]
      })
    }
  }
}

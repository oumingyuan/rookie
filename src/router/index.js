import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Begin from '@/components/begin/Begin'
import Template from '@/components/begin/Template'
import Income from '@/components/echarts/Income'
import ExportExcel from '@/components/excel/ExportExcel'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/begin',
      name: 'Begin',
      component: Begin
    },
    {
      path: '/template',
      name: 'Template',
      component: Template
    },
    {
      path: '/income',
      name: 'Income',
      component: Income
    },
    {
      path: '/ExportExcel',
      name: 'ExportExcel',
      component: ExportExcel
    }
  ]
})

export default {
  data () {
    return {
      site: '菜鸟教程',
      url: 'www.runoob.com',
      alexa: '10000'
    }
  },
  methods: {
    exportExcel: function () {
      window.location.href = '/report/exportBooksTable.do'
    }
  }

}

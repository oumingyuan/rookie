export default {
  data () {
    return {
      site: '菜鸟教程',
      url: 'www.runoob.com',
      alexa: '10000'
    }
  },
  methods: {
    details: function () {
      return this.site + ' - 学的不仅是技术，更是梦想！'
    }
  }

  // document.write('hello');

}

// document.write(this.data.url)

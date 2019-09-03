import Vue from 'vue'
import App from './App.vue'
//1. 引入组件
import ElementUI from 'element-ui'
// 2. 引入样式
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  render: h => h(App)
}).$mount('#app')

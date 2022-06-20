import { createApp } from 'vue';
import App from './App.vue';
// 引入antDesign的message的css
// 之后需要用到message组件时，import { message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css';

const app = createApp(App);

app.mount('#app');

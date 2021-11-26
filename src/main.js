import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

// 滚动动画兼容性处理
import { polyfill } from "@/utils/smooth-scroll";
polyfill();

// 时限本地缓存
import Storage from "@/utils/ls";
const ls = new Storage();
app.config.globalProperties.$ls = ls;

// 页面混入wowMixin即可使用wowjs
// 异步组件需要使用new WOW重新定制
import "wowjs/css/libs/animate.css";

// svg-icon
import "./icons";

// mixin
import { appMixin } from "@/common/mixins";
app.mixin(appMixin);

// element
import registerElement from "./plugins/register-element"; //导入
registerElement(app);

app.use(store).use(router).mount("#app");

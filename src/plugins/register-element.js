import { ElButton, ElInput, ElMessage } from "element-plus";

const components = [ElButton, ElInput];

const plugins = [ElMessage];

export default function (app) {
  for (const component of components) {
    app.component(component.name, component);
  }
  for (const plugin of plugins) {
    app.use(plugin);
  }
}

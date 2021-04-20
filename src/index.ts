import { App } from "@vue/runtime-core"

import BlInput from './components/input';

import './index.css';
import './components/input/input.sass';

const components = [
  BlInput
]

function install(Vue: App) {
  // tslint:disable-next-line: forin
  for (const component in components) {
    Vue.component(components[component].name, components[component])
  }
  // Vue.config.globalProperties.$Message = Message
  // Vue.config.globalProperties.$Notification = Notification
  // Vue.config.globalProperties.$Loading = Loadingbar
}

export default { install }

export { default as BlInput } from './components/input'
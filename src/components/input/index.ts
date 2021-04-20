import { App } from 'vue'
import BlInput from './input'
import './input.sass';

BlInput.install = (Vue: App) => {
  Vue.component(BlInput.name, BlInput)
}

export default BlInput
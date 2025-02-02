import type { App } from 'vue'
import component from './ExPageHeader.vue'
import '../style.css' 

component.install = (app: App): void => {
  app.component(component.__name as string, component)
}
 
export default component

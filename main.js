import { renderTaskList } from './src/components/tasklists.js'
import './style.css'

const app = document.querySelector('#app')
 
const components=[renderTaskList()]

components.forEach(element=>{
  app.append(element)
})



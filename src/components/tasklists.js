import {renderTaskItem} from './taskitem.js'
import {getTasks} from '../store/tasks.js'
function render(){
    
    const ul =document.createElement('ul')

    function renderLiItems(){
        ul.innerHTML=''
        const task=getTasks()
        task.forEach(task=>{
            ul.append(renderTaskItem({task}))
        })  
    }
    renderLiItems()
    document.addEventListener('tasksChanged',(e)=>{
        renderLiItems()   
      })

    return ul
}

export {render as renderTaskList}
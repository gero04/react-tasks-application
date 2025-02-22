import React from 'react'

function EliminarTarea({task}) {
  
    function eliminarTarea(id, arrayTarea) {
        return arrayTarea.splice(id, 1)
    }
  
    return (
    <button onClick={eliminarTarea(task.id, task)}>Eliminar tarea</button>
  )
}

export default EliminarTarea
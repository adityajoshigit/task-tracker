import { useContext, useEffect, useState } from "react"
import TaskContext from "../context/TaskContext"

function NoTasksDisplay() {
  const { tasks } = useContext(TaskContext);
  
  useEffect(() => {
    setNoTasksFlag(tasks.length?true:false);
  }, [tasks]);

  const [noTasksFlag, setNoTasksFlag] = useState(tasks.length?true:false);
  
  return (
    noTasksFlag 
      ? <></>
      : (
        <div className='d-flex flex-row justify-content-center no-display-text'>
          No Tasks.. Click + button to add more.
        </div>
      )
  )
}

export default NoTasksDisplay
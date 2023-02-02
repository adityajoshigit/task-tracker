import { createContext, useState } from "react";

const TaskContext = createContext();

export const TaskContextProvider = ({
  children
}) => {
  const [tasks, setTasks] = useState([
      {
          id: 1,
          desc: 'Grocery Shopping',
          dt: 'Jan 19th @ 7:00 PM',
          reminder: false,
          isDeleted: false
      },
      {
          id: 2,
          desc: 'Complete Online Assessment',
          dt: 'Jan 19th @ 10:00 AM',
          reminder: true,
          isDeleted: false
      },
      {
          id: 3,
          desc: 'Go through Lec 2 Slides',
          dt: 'Jan 19th @ 12:00 PM',
          reminder: true,
          isDeleted: false
      },
      {
          id: 4,
          desc: 'Check flights for US Trip',
          dt: 'Jan 18th @ 10:00 PM',
          reminder: false,
          isDeleted: false
      }
  ]);
  return (
    <TaskContext.Provider value={
      {
        tasks
      }
    }>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
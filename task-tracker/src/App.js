import {useState} from "react";
import AddTask from "./Components/AddTask";
import ToDo from "./Components/ToDo";

function App() {
  const [ taskList, setTaskList] = useState ([]);
  return (
    <>
     <h1 className="text-2xl font-bold py-6 pl-6">Task Tracker</h1>
     <p className="text-xl pl-6">Hi there</p>
     <div className="flex flex-row items-center">
      <p className="text-xl pl-6">click</p>
      <AddTask taskList={taskList} setTaskList={setTaskList} />
      <p className="text-xl my-2">to add a new task</p>
     </div>
     <div>
        <h2 className="ml-6 text-xl font-sembold w-3/4
        max-w-lg my-4 py-2 px-4 bg-gray-200">ToDo:</h2>
        {taskList.map((task, i) =>
          <>  
             <ToDo key={i} task={task} /> 
          </>
        )}
    </div>
    </>
  );
}

export default App;

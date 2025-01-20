import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectFilter, selectTasks } from "@/Redux/features/task/taskSlice";
import { useAppSelector } from "@/Redux/hooks";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);
  console.log(tasks);
  console.log(filter);

  return (
    <div>
      <div className="flex justify-between items-center">
      <h2 className="text-3xl font-semibold">Tasks</h2>  
      <AddTaskModal/>
      </div>
      <div className="flex flex-col gap-6 mt-4">
      {
        tasks?.map((task) => (
          <TaskCard key={task.id} task={task}/>
        ))
      }
      </div>
    </div>
  );
};

export default Tasks;
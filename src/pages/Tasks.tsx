import { selectFilter, selectTasks } from "@/Redux/features/task/taskSlice";
import { useAppSelector } from "@/Redux/hooks";

const Tasks = () => {

  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);
  console.log(tasks);
  console.log(filter);

  return (
    <div>
      This is Tasks Page
    </div>
  );
};

export default Tasks;
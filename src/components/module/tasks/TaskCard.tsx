import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteTask, toggleCompleteState } from "@/Redux/features/task/taskSlice";
import { useAppDispatch } from "@/Redux/hooks";
import { ITask } from "@/Types/types";
import { Trash2 } from "lucide-react";
import UpdateTask from "./UpdateTask";

interface IProps {
  task: ITask;
}

const TaskCard = ({task} : IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className={`border-2 p-4 space-y-4` }>
      <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <div className={cn("size-3 rounded-full", {
          "bg-green-500" : task.priority === "low",
          "bg-orange-500" : task.priority === "medium",
          "bg-yellow-500" : task.priority === "high",
        })}></div>
        <div className={cn({"line-through": task.isCompleted})}>{task.title}</div>
      </div>
      <div className="flex gap-4 items-center">
        <UpdateTask task={task}/>
        <Button variant="link" className="p-0 text-red-500" onClick={() => dispatch(deleteTask(task.id))}>
          <Trash2 />
        </Button>
        <Checkbox checked={task.isCompleted} onClick={() => dispatch(toggleCompleteState(task.id))}/>
      </div>
      </div>

      <p>{task.description}</p>

    </div>
  );
};

export default TaskCard;
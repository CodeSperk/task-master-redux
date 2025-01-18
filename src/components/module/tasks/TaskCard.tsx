import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ITask } from "@/Types/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

const TaskCard = ({task} : IProps) => {
  return (
    <div className="border-2 p-4 space-y-4">
      <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <div className={cn("size-3 rounded-full", {
          "bg-green-500" : task.priority === "Low",
          "bg-orange-500" : task.priority === "Medium",
          "bg-yellow-500" : task.priority === "High",
        })}></div>
        <div>{task.title}</div>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="Link" className="p-0 text-red-500">
          <Trash2 />
        </Button>
        <Checkbox/>
      </div>
      </div>

      <p>{task.description}</p>

    </div>
  );
};

export default TaskCard;
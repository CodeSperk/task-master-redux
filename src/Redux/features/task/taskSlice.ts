import { RootState } from "@/Redux/store";
import { ITask } from "@/Types/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks : ITask[];
  filter: "all" | "High" | "Medium" | "Low";
}

const initialState : InitialState = {
  tasks : [
    {
    id: "kdjiej",
    title: "Initialized frontend",
    description: "Create a Task Home page and routing",
    dueDate: "2025-11",
    isCompleted: false,
    priority: "High"
  },
    {
    id: "kdddjiej",
    title: "Create Github Repo",
    description: "Create a Task Home page and routing",
    dueDate: "2025-11",
    isCompleted: false,
    priority: "High"
  }
],
filter: "all",
}

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: { },
})

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
}

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
}


export default taskSlice.reducer;
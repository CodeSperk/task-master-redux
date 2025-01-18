import { ITask } from "@/Types/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  task : ITask[];
}

const initialState : InitialState = {
  task : [
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
]
}

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {

  }
})

export default taskSlice.reducer;
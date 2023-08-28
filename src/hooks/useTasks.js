import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addNewTask, deleteTask, toggleIsDone } from "../features/tasks/taskSlice";
import { toast } from "sonner";

export const useTasks = () => {
	const dispatch = useDispatch();
	const tasks = useSelector((state) => state.tasks);
	const [newTaskTitle, setNewTaskTitle] = useState("");
	const [newTaskDescription, setNewTaskDescription] = useState("");

	const handleToggleIsDone = (id) => {
		dispatch(toggleIsDone(id));
	};

	const handleAddNewTask = () => {
		if (!newTaskTitle.trim().length) {
			return toast.error("투두 리스트에 등록하려면 제목이 필요합니다! 🥲");
		}

		if (!newTaskDescription.trim().length) {
			return toast.error("투두 리스트에 등록하려면 내용이 필요합니다! 🥲");
		}

		dispatch(addNewTask({ title: newTaskTitle, description: newTaskDescription }));
		setNewTaskTitle("");
		setNewTaskDescription("");
	};

	const handleDeleteTask = (id) => {
		dispatch(deleteTask(id));
	};

	return {
		tasks,
		newTaskTitle,
		setNewTaskTitle,
		newTaskDescription,
		setNewTaskDescription,
		handleToggleIsDone,
		handleAddNewTask,
		handleDeleteTask,
	};
};

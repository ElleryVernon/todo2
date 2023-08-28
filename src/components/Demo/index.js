import React, { useState } from "react";
import { toast } from "sonner";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { useTasks } from "../../hooks/useTasks";
import TaskCard from "./TaskCard";
import TaskInput from "./TaskInput";
import { Container, Heading } from "./styles";

const Demo = () => {
	const { width, height } = useWindowSize();
	const {
		tasks,
		newTaskTitle,
		setNewTaskTitle,
		newTaskDescription,
		setNewTaskDescription,
		handleToggleIsDone,
		handleAddNewTask,
		handleDeleteTask,
	} = useTasks();

	const [showConfetti, setShowConfetti] = useState(false);
	const handleConfetti = (title) => {
		toast.success(`🎉 ${title} 완료!`);
		setShowConfetti(true);
		setTimeout(() => setShowConfetti(false), 4250);
	};

	return (
		<div>
			{showConfetti && (
				<Confetti
					width={width}
					height={height - 64}
					numberOfPieces={300}
					wind={0.01}
					gravity={0.15}
				/>
			)}
			<Container>
				<TaskInput
					newTaskTitle={newTaskTitle}
					setNewTaskTitle={setNewTaskTitle}
					newTaskDescription={newTaskDescription}
					setNewTaskDescription={setNewTaskDescription}
					handleAddNewTask={handleAddNewTask}
				/>
				<Heading>Working 🔥</Heading>
				{tasks
					.filter((task) => !task.isDone)
					.map((task) => (
						<TaskCard
							key={task.id}
							task={task}
							handleToggleIsDone={() => handleToggleIsDone(task.id)}
							handleDeleteTask={() => handleDeleteTask(task.id)}
							handleConfetti={handleConfetti}
						/>
					))}
				<Heading>Done..! 🎉</Heading>
				{tasks
					.filter((task) => task.isDone)
					.map((task) => (
						<TaskCard
							key={task.id}
							task={task}
							handleToggleIsDone={() => handleToggleIsDone(task.id)}
							handleDeleteTask={() => handleDeleteTask(task.id)}
							handleConfetti={handleConfetti}
						/>
					))}
			</Container>
		</div>
	);
};

export default Demo;

import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "sonner";

import "./App.css";
import Home from "./containers/Home";
import TaskDetail from "./containers/TaskDetail";
import { store } from "./store";

const App = () => (
	<Provider store={store}>
		<Toaster position="top-center" />
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/task/:taskId/:slug" element={<TaskDetail />} />
			</Routes>
		</Router>
	</Provider>
);

export default App;

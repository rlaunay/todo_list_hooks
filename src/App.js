import Store from './store/store';

import TodoForm from './components/TodoForm/TodoForm';
import Todos from './components/Todos/Todos';

import classes from './App.module.css';

const App = () => {
	return (
		<Store>
			<div className={classes.App}>
				<h1>Todo APP</h1>
				<TodoForm />
				<Todos />
			</div>
		</Store>
	);
};

export default App;

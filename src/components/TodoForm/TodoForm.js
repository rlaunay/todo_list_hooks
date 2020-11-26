import { useContext, useState } from 'react';
import { Context } from '../../store/store';
import { v4 as uuidv4 } from 'uuid';

import classes from './TodoForm.module.css';

const TodoForm = () => {
	const [, dispacth] = useContext(Context);
	const [todo, setTodo] = useState('');

	const addTodoHandler = (e) => {
		e.preventDefault();
		const id = uuidv4();
		dispacth({
			type: 'ADD_TODO',
			payload: { id, text: todo, completed: false },
		});
		setTodo('');
	};

	return (
		<form onSubmit={addTodoHandler} className={classes.TodoForm}>
			<input
				className={classes.Input}
				type="text"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button className={classes.Submit} type="submit">
				Add todo
			</button>
		</form>
	);
};

export default TodoForm;

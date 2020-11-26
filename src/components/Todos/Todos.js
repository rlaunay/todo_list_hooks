import { useContext } from 'react';
import { Context } from '../../store/store';

import Todo from './Todo/Todo';

import classes from './Todos.module.css';

const Todos = () => {
	const [state, dispacth] = useContext(Context);

	return (
		<ul className={classes.Todos}>
			{state.map((todo) => (
				<Todo
					key={todo.id}
					text={todo.text}
					completed={todo.completed}
					toggle={() =>
						dispacth({ type: 'TOGGLE_TODO', payload: todo.id })
					}
					remove={() =>
						dispacth({ type: 'REMOVE_TODO', payload: todo.id })
					}
				/>
			))}
		</ul>
	);
};

export default Todos;

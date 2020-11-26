import classes from './Todo.module.css';

const Todo = (props) => {
	let textClasses = props.completed
		? classes.Text + ' ' + classes.Checked
		: classes.Text;

	return (
		<li className={classes.Todo}>
			<div className={textClasses}>{props.text}</div>
			<input
				className={classes.Checkbox}
				type="checkbox"
				checked={props.completed}
				onClick={props.toggle}
			/>
			<button onClick={props.remove} className={classes.Remove}>
				X
			</button>
		</li>
	);
};

export default Todo;

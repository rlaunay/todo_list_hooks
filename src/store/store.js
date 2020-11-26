import { createContext, useReducer } from 'react';
import { todoReducer } from '../reducers/reducer';

const initialState = [];
export const Context = createContext(initialState);

const Store = ({ children }) => {
	const [state, dispatch] = useReducer(todoReducer, initialState);

	return (
		<Context.Provider value={[state, dispatch]}>
			{children}
		</Context.Provider>
	);
};

export default Store;

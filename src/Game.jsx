import { useEffect, useState } from 'react';
import { Information, Field } from './components';
import styles from './Game.module.css';
import { store } from './store';

function Game() {
	const [state, setState] = useState(store.getState());
	const dispatch = store.dispatch;

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => unsubscribe();
	}, []);

	return (
		<>
			<Information
				isDraw={state.isDraw}
				isGameEnded={state.isGameEnded}
				currentPlayer={state.currentPlayer}
			/>
			<Field
				field={state.field}
				currentPlayer={state.currentPlayer}
				WIN_PATTERNS={state.WIN_PATTERNS}
				dispatch={dispatch}
			/>
		</>
	);
}

export default Game;

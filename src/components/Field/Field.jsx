import { store } from '../../store';
import styles from './Field.module.css';

export const Field = () => {
	const state = store.getState();
	const dispatch = store.dispatch;

	const checkWinner = (field) => {
		let winnerCombination = state.WIN_PATTERNS;

		for (let combination of winnerCombination) {
			let [a, b, c] = combination;
			if (field[a] && field[a] === field[b] && field[b] === field[c]) {
				return field[a];
			}
		}

		if (field.every((item) => item !== '')) {
			dispatch({
				type: 'SET_GAME_RESULT',
				payload: { isDraw: true, isGameEnded: true },
			});
		}

		return null;
	};

	const hundleMove = (index) => {
		if (!state.isGameEnded && state.field[index] === '') {
			const newField = [...state.field];
			newField[index] = state.currentPlayer;

			dispatch({
				type: 'SET_FIELD',
				payload: newField,
			});

			const winner = checkWinner(newField);

			if (winner) {
				dispatch({
					type: 'SET_GAME_RESULT',
					payload: { isDraw: false, isGameEnded: true },
				});
				dispatch({
					type: 'SET_CURRENT_PLAYER',
					payload: winner,
				});
			} else {
				dispatch({
					type: 'SET_CURRENT_PLAYER',
					payload: state.currentPlayer === 'X' ? 'O' : 'X',
				});
			}
		}
	};
	// const resetBtn = () => {
	// 	setIsDraw(false);
	// 	setIsGameEnded(false);
	// 	setCurrentPlayer('X');
	// 	setField(['', '', '', '', '', '', '', '', '']);
	// };

	const resetGame = () => {
		dispatch({ type: 'RESTART_GAME' });
	};

	return (
		<div className={styles.rootContainer}>
			{state.isDraw === true || state.isGameEnded === true ? (
				<button className={styles.resetBtn} onClick={resetGame}>
					Начать сначала
				</button>
			) : (
				''
			)}

			<div className={styles.container}>
				{state.field.map((item, index) => (
					<div
						key={index}
						className={styles.containerCell}
						onClick={() => hundleMove(index)}
					>
						{item}
					</div>
				))}
			</div>
		</div>
	);
};

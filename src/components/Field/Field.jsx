import PropTypes from 'prop-types';
import styles from './Field.module.css';

const FieldLayout = ({
	field,
	currentPlayer,
	setField,
	setCurrentPlayer,
	WIN_PATTERNS,
	setIsDraw,
	setIsGameEnded,
	isDraw,
	isGameEnded,
}) => {
	const checkWinner = (field) => {
		let winnerCompination = WIN_PATTERNS;

		for (let combination of winnerCompination) {
			let [a, b, c] = combination;
			if (field[a] && field[a] === field[b] && field[b] === field[c]) {
				return field[a];
			}
		}

		if (field.every((item) => item !== '')) {
			return setIsDraw(true);
		}

		return null;
	};

	const winner = checkWinner(field);
	if (winner) {
		setIsGameEnded(true);
		setCurrentPlayer(winner);
	}

	const hundleMove = (index) => {
		if (!winner) {
			if (field[index] === '') {
				let newField = [...field];
				if (currentPlayer === 'X') {
					newField[index] = 'X';
				} else if (currentPlayer === 'O') {
					newField[index] = 'O';
				}

				setField(newField);

				let newCurrentPlayed = currentPlayer === 'X' ? 'O' : 'X';
				setCurrentPlayer(newCurrentPlayed);
			}
		} else {
			return;
		}
	};

	const resetBtn = () => {
		setIsDraw(false);
		setIsGameEnded(false);
		setCurrentPlayer('X');
		setField(['', '', '', '', '', '', '', '', '']);
	};

	const resetButton = (
		<button className={styles.resetBtn} onClick={resetBtn}>
			Начать сначала
		</button>
	);

	return (
		<div className={styles.rootContainer}>
			{isDraw === true || isGameEnded === true ? resetButton : ''}

			<div className={styles.container}>
				{field.map((item, index) => (
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

FieldLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	WIN_PATTERNS: PropTypes.array,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	isGameEnded: PropTypes.bool,
};

export const Field = ({
	field,
	currentPlayer,
	setField,
	setCurrentPlayer,
	WIN_PATTERNS,
	setIsDraw,
	setIsGameEnded,
	isDraw,
	isGameEnded,
}) => {
	return (
		<FieldLayout
			field={field}
			currentPlayer={currentPlayer}
			setField={setField}
			setCurrentPlayer={setCurrentPlayer}
			WIN_PATTERNS={WIN_PATTERNS}
			setIsDraw={setIsDraw}
			setIsGameEnded={setIsGameEnded}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
		/>
	);
};

Field.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	WIN_PATTERNS: PropTypes.array,
	setIsDraw: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};

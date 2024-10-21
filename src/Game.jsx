import { useState } from 'react';
import { Information, Field } from './components';
import PropTypes from 'prop-types';
import styles from './Game.module.css';

const GameLayout = ({
	field,
	isDraw,
	isGameEnded,
	currentPlayer,
	setField,
	setCurrentPlayer,
	WIN_PATTERNS,
	setIsDraw,
	setIsGameEnded,
}) => {
	return (
		<>
			<Information
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
			<Field
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
		</>
	);
};

GameLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	WIN_PATTERNS: PropTypes.array,
	setIsDraw: PropTypes.func,
	setIsGameEnded: PropTypes.func,
};

function Game() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	return (
		<GameLayout
			field={field}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			setField={setField}
			setCurrentPlayer={setCurrentPlayer}
			WIN_PATTERNS={WIN_PATTERNS}
			setIsDraw={setIsDraw}
			setIsGameEnded={setIsGameEnded}
		/>
	);
}

Game.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	WIN_PATTERNS: PropTypes.array,
	setIsDraw: PropTypes.func,
	setIsGameEnded: PropTypes.func,
};

export default Game;

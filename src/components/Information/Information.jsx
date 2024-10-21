import PropTypes from 'prop-types';
import styles from './Information.module.css';

const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
	return (
		<div className={styles.rootContainer}>
			<div className={styles.infoContainer}>
				<h1 className={styles.infoContainerTitle}>
					{isDraw === true
						? 'Ничья'
						: '' +
							(isDraw === false && isGameEnded === true
								? `Победа: ${currentPlayer}`
								: '') +
							(isDraw === false && isGameEnded === false
								? `Ходит: ${currentPlayer}`
								: '')}
				</h1>
			</div>
		</div>
	);
};

InformationLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	return (
		<InformationLayout
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
		/>
	);
};

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};

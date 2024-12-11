import { useEffect, useState } from 'react';
import { store } from '../../store';
import styles from './Information.module.css';

export const Information = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState);
		});

		return () => unsubscribe();
	}, []);

	const getTitle = () => {
		if (state.isDraw) {
			return 'Ничья';
		}

		if (state.isGameEnded) {
			return `Победа: ${state.currentPlayer}`;
		}

		return `Ходит: ${state.currentPlayer}`;
	};

	return (
		<div className={styles.rootContainer}>
			<div className={styles.infoContainer}>
				<h1 className={styles.infoContainerTitle}>{getTitle()}</h1>
			</div>
		</div>
	);
};

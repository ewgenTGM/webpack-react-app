import React from 'react';
import styles from './colorCard.module.css';

export const ColorCard = (props) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__header}>Header</div>
			<div className={styles.card__body}>Body</div>
			<div className={styles.card__footer}>Footer</div>
		</div>
	);
};

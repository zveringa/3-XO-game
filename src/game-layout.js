import styles from './game.module.css';
import { Field, Info } from './components';
import PropTypes from 'prop-types';

export const GameLayout = ({ handleRestart }) => (
	<div className={styles.game}>
		<Info />
		<Field />

		<button className={styles.restartButton} onClick={handleRestart}>
			Restart
		</button>
	</div>
);
GameLayout.propTypes = {
	handleRestart: PropTypes.func,
};

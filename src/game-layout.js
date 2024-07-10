import styles from './game.module.css';
import { Field, Info } from './components';
import PropTypes from 'prop-types';
import { PLAYER, STATUS } from './constants';
import { handleRestart } from './components/handlers';

export const GameLayout = ({
	status,
	currentPlayer,
	field,
	handleCellClick,
	handleRestart,
}) => (
	<div className={styles.game}>
		<Info status={status} currentPlayer={currentPlayer} />
		<Field field={field} handleCellClick={handleCellClick} />

		<button className={styles.restartButton} onClick={handleRestart}>
			Restart
		</button>
	</div>
);
GameLayout.propTypes = {
	status: PropTypes.oneOf([STATUS.DRAW, STATUS.TURN, STATUS.WIN]),
	currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHTS, PLAYER.NOBODY]),
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleRestart: PropTypes.func.isRequired,
};

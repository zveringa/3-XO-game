import styles from './field.module.css';
import PropTypes from 'prop-types';
import { PLAYER_SIGN } from '../../constants';

export const FieldLayout = ({ field, handleCellClick }) => (
	<div className={styles.field}>
		{field.map((cellPlayer, index) => (
			<button
				key={index}
				className={styles.cell}
				onClick={() => handleCellClick(index)}
			>
				{PLAYER_SIGN[cellPlayer]}
			</button>
		))}
	</div>
);
FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleCellClick: PropTypes.func.isRequired,
};

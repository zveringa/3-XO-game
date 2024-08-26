import { FieldLayout } from './field-layout';
import { checkWin, doesEmptyCellExist } from '../../utils';
import { connect } from 'react-redux';
import { PLAYER, STATUS } from '../../constants';
import { setCurrentPlayer, setStatus, setField } from '../../actions';
import { selectStatus, selectField, selectCurrentPlayer } from '../../selectors';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class FieldContainer extends Component {
	constructor(props) {
		super(props);
		this.handleCellClick = this.handleCellClick.bind(this);
	}

	handleCellClick(cellIndex) {
		const { status, currentPlayer, field, dispatch } = this.props;
		if (
			status === STATUS.WIN ||
			status === STATUS.DRAW ||
			field[cellIndex] !== PLAYER.NOBODY
		) {
			return;
		}

		const newField = [...field];

		newField[cellIndex] = currentPlayer;

		dispatch(setField(newField));

		if (checkWin(newField, currentPlayer)) {
			dispatch(setStatus(STATUS.WIN));
		} else if (doesEmptyCellExist(newField)) {
			const newCurrentPlayer =
				currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHTS : PLAYER.CROSS;
			dispatch(setCurrentPlayer(newCurrentPlayer));
		} else {
			dispatch(setStatus(STATUS.DRAW));
		}
	}

	render() {
		return (
			<FieldLayout
				field={this.props.field}
				handleCellClick={this.handleCellClick}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	status: selectStatus(state),
	currentPlayer: selectCurrentPlayer(state),
	field: selectField(state),
});

export const Field = connect(mapStateToProps)(FieldContainer);

FieldContainer.propTypes = {
	status: PropTypes.oneOf(Object.values(STATUS)).isRequired,
	currentPlayer: PropTypes.oneOf(Object.values(PLAYER)).isRequired,
	field: PropTypes.arrayOf(PropTypes.oneOf(Object.values(PLAYER))).isRequired,
	dispatch: PropTypes.func.isRequired,
};

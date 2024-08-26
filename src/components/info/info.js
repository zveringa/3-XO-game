import React from 'react';
import { InfoLayout } from './info-layout';
import { PLAYER, PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants';
import { selectStatus, selectCurrentPlayer } from '../../selectors';
import { connect } from 'react-redux';
import { Component } from 'react';
import PropTypes from 'prop-types';
export class InfoContainer extends Component {
	render() {
		const { status, currentPlayer } = this.props;
		const playerAction = PLAYER_ACTION[status];
		const playerName = PLAYER_NAME[currentPlayer];

		console.log(`Action: ${playerAction} , Player: ${playerName}`);

		const information =
			status === STATUS.DRAW ? 'Draw' : `${playerAction} : ${playerName}`;

		return <InfoLayout information={information} />;
	}
}

const mapStateToProps = (state) => ({
	status: selectStatus(state),
	currentPlayer: selectCurrentPlayer(state),
});

export const Info = connect(mapStateToProps)(InfoContainer);
InfoContainer.propTypes = {
	status: PropTypes.oneOf(Object.values(STATUS)).isRequired,
	currentPlayer: PropTypes.oneOf(Object.values(PLAYER)).isRequired,
};

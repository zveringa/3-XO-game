import React from 'react';
import { InfoLayout } from './info-layout';
import { PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants';
import { selectStatus, selectCurrentPlayer } from '../../selectors';
import { useSelector } from 'react-redux';

export const Info = () => {
	const status = useSelector(selectStatus);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const playerAction = PLAYER_ACTION[status];
	const playerName = PLAYER_NAME[currentPlayer];

	console.log(`Action: ${playerAction} , Player: ${playerName}`);

	const information =
		status === STATUS.DRAW ? 'Draw' : `${playerAction} : ${playerName}`;

	return <InfoLayout information={information} />;
};

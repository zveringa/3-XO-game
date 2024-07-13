import React from 'react';
import { InfoLayout } from './info-layout';
import { PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants';

import { useReduxState } from '../../redux-manager';

export const Info = () => {
	const { status, currentPlayer } = useReduxState();
	const playerAction = PLAYER_ACTION[status];
	const playerName = PLAYER_NAME[currentPlayer];

	console.log(`Action: ${playerAction} , Player: ${playerName}`);

	const information =
		status === STATUS.DRAW ? 'Draw' : `${playerAction} : ${playerName}`;

	return <InfoLayout information={information} />;
};

import React, { useState } from 'react';
import { GameLayout } from './game-layout';
import { STATUS, PLAYER } from './constants';
import './components/info/info.js';
import './game-layout';
import { handleCellClick } from './components/handlers/index.js';
import { handleRestart } from './components/handlers/index.js';
import { createEmptyField } from './utils';

export const Game = () => {
	const [status, setStatus] = useState(STATUS.TURN);
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);

	const [field, setField] = useState(createEmptyField());

	const state = { status, setStatus, currentPlayer, setCurrentPlayer, field, setField };

	return (
		<GameLayout
			status={status}
			currentPlayer={currentPlayer}
			field={field}
			handleCellClick={(cellINdex) => handleCellClick(state, cellINdex)}
			handleRestart={() => handleRestart(state)}
		/>
	);
};

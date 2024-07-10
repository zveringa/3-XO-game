import { checkWin, doesEmptyCellExist } from '../../utils';
import { STATUS, PLAYER } from '../../constants';

export const handleCellClick = (
	{ status, field, currentPlayer, setField, setStatus, setCurrentPlayer },
	cellIndex,
) => {
	if (
		status === STATUS.WIN ||
		status === STATUS.DRAW ||
		field[cellIndex] !== PLAYER.NOBODY
	) {
		return;
	}

	const newField = [...field];

	newField[cellIndex] = currentPlayer;

	setField(newField);

	if (checkWin(newField, currentPlayer)) {
		setStatus(STATUS.WIN);
	} else if (doesEmptyCellExist(newField)) {
		setCurrentPlayer(currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHTS : PLAYER.CROSS);
	} else {
		setStatus(STATUS.DRAW);
	}
};

import { FieldLayout } from './field-layout';
import { checkWin, doesEmptyCellExist } from '../../utils';
import { useSelector, useDispatch } from 'react-redux';
import { PLAYER, STATUS } from '../../constants';
import { setCurrentPlayer, setStatus, setField } from '../../actions';
import { selectStatus, selectField, selectCurrentPlayer } from '../../selectors';
export const Field = () => {
	const status = useSelector(selectStatus);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const field = useSelector(selectField);

	const dispatch = useDispatch();
	const handleCellClick = (cellIndex) => {
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
	};

	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};

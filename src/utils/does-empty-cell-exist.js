import { PLAYER } from '../constants';

export const doesEmptyCellExist = (field) =>
	field.some((cellPlayer) => cellPlayer === PLAYER.NOBODY);

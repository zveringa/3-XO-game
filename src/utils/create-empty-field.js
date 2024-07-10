import { PLAYER } from '../constants';
import PropTypes from 'prop-types';

export const createEmptyField = () => new Array(9).fill(PLAYER.NOBODY);

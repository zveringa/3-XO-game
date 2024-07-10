import React from 'react';
import styles from './info.module.css';
import PropTypes from 'prop-types';

export const InfoLayout = ({ information, currentPlayer, isGameEnded, isDraw }) => {
	return <div className={styles.info}>{information}</div>;
};
InfoLayout.propTypes = {
	information: PropTypes.string.isRequired,
};

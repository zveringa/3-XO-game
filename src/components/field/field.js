import { FieldLayout } from './field-layout';
import PropTypes from 'prop-types';

export const Field = ({ field, handleCellClick }) => {
	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};
Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleCellClick: PropTypes.func.isRequired,
};

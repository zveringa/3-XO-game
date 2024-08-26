import React from 'react';

import PropTypes from 'prop-types';
import { Component } from 'react';

export class InfoLayout extends Component {
	render() {
		return <div>{this.props.information}</div>;
	}
}

InfoLayout.propTypes = {
	information: PropTypes.string,
};

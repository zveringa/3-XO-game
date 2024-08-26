import { Field, Info } from './components';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class GameLayout extends Component {
	render() {
		return (
			<div className="flex flex-col items-center max-w-xs my-12 mx-auto">
				<Info />
				<Field />

				<button
					className=" text-sm bg-gray-200 border border-black rounded-sm px-1 "
					onClick={this.props.handleRestart}
				>
					Restart
				</button>
			</div>
		);
	}
}
GameLayout.propTypes = {
	handleRestart: PropTypes.func,
};

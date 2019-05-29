import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {


	render() {
		return (
			<div>
				Songs List
			</div>
		)
	}
}

export default connect()(SongList);


import React, {Component  }from 'react';

class nav extends Component{
	render(){
		console.log('Nav Rendered');
		return( 
		<nav className="navbar navbar-light bg-light">
		  <a className="navbar-brand mb-0 h1">Navbar
		  <span className="badge badge-pill badge-secondary">
			{this.props.totalLength}
			</span>
			</a>
		</nav>
		);
	}
}
export default nav;
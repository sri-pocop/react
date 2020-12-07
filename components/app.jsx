import React, {Component  }from 'react';
import Comp2 from './comp2';
import Nav from './nav';

class app extends Component{
	state = {
		counters:[
		{ id : 1, value : 0},
		{ id : 2, value : 2},
		{ id : 3, value : 3},
		{ id : 4, value : 4}
		]
	};
	constructor(){
		super();
		console.log('Constructor');
	}
	componentDidMount(){
		console.log('App Mounted');
	}
	componentDidUpdate(){
		console.log('App Updated');
	}
	handleReset = () => {
		const counters = this.state.counters;
		counters.map(c => c.value = 0)
		this.setState({counters : counters});
		console.log(this.state.counters);
	}
	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index].value++;
		this.setState({counters});
		//console.log(counter,index);
		//this.setState({value: this.props.obj.value+1});
	}
	handleDecrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index].value--;
		this.setState({counters});
		console.log(counter,index);
	}
	handleDelete = (id) => {
		console.log(id);
		const counters = this.state.counters.filter(c => c.id !== id);
		this.setState({counters : counters});
	}
	render(){
		console.log('App Rendered');
		return( 
		<React.Fragment>
			<div className="container">
				<Nav
					totalLength = {this.state.counters.filter(c => c.value>0).length}
				>	
				</Nav>
				<br/>
				<Comp2 
					counterObj={this.state.counters} 
					delm={this.handleDelete}
					incm={this.handleIncrement}
					decm={this.handleDecrement}
					resetm={this.handleReset}
				>
				</Comp2>
			</div>
		</React.Fragment>
		);
	}
}
export default app;
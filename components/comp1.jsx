import React, {Component  }from 'react';

class comp1 extends Component{
	state = {
		value : this.props.obj.value,
		imageurl : 'https://picsum.photos/200',
		tags : ['tag1','tag2','tag3']
	};
	componentWillUnmount(){
		console.log('App UnMounted');
	}
	render(){
		console.log('Comp1 Rendered');
		return( 
		<React.Fragment>
		{/*<img src={this.state.imageurl} alt="image"/>*/}
			<br/>
			<span className = {this.getBadgeColor()}>{this.countFunc()}</span>&nbsp;&nbsp;
			<span>
				<button onClick={() => this.props.inc(this.props.obj)} className ="btn btn-primary btn-sm"> + </button>&nbsp;&nbsp;
				<button onClick={() => this.props.dec(this.props.obj)} className ="btn btn-danger btn-sm"> - </button>&nbsp;&nbsp;
				<button onClick={() => this.props.del(this.props.obj.id)} className ="btn btn-warning btn-sm">Delete</button>&nbsp;&nbsp;
			</span>
			<span>
			
			</span>
			{/*<ul>
			this.state.tags.map(tag => <li key={tag}>{tag}</li>)
			</ul>*/}
		</React.Fragment>);
	}
	consoleLog = () => {
		console.log(this.props.obj);
	}
	handleIncrement = () => {
		//console.log("Sdf", this);
		this.setState({value: this.props.obj.value+1});
	}
	handleDecrement = () => {
		//console.log("Sdf", this);
		this.setState({value: this.props.obj.value-1});
	}
	getBadgeColor(){
		let classes = "badge badge-";
		return classes += this.props.obj.value === 0? "warning" : "primary";
	}
	countFunc(){
		return this.props.obj.value;
	}
}
export default comp1;
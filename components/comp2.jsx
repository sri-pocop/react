import React, {Component  }from 'react';
import Comp1 from './comp1';

class comp2 extends Component{
	render(){
		console.log('comp2 Rendered');
		const {delm, incm, decm, resetm, counterObj} = this.props;
		return( 
		<div>
			<button onClick={resetm} className="btn btn-primary">Reset</button>
			{counterObj.map(counter => 
			<Comp1 key={counter.id} 
				obj={counter} 
				del={delm}
				inc={incm}
				dec={decm}
				> 
				
			</Comp1>
			)}
		</div>
		);
	}
}
export default comp2;
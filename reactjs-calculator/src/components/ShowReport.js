import React, {Component} from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';

class ShowReport extends Component {

	render() {
        let {showReport} = this.props;
         return (
            <div className="showReport">
            <p>Add: {showReport[0]}</p>
            <p>Substract:{showReport[1]}</p>
     		<p>Multiply: {showReport[2]}</p>
            <p>Divide:{showReport[3]}</p>
            <p>Square Root: {showReport[4]}</p>
            <p>Cube Root:{showReport[5]}</p>
            <p>Power: {showReport[6]}</p>
            <p>Factorial:{showReport[7]}</p>
            
                   
            </div>
    )
        ;
    }
}


export default ShowReport;


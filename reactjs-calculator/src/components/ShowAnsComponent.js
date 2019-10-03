import React, {Component} from 'react';

class ShowAnsComponent extends Component {


    render() {
        let {ans} = this.props;
        return (
            <div className="ans">
                <p>{ans}</p>
            </div>
    )
        ;
    }
}


export default ShowAnsComponent;


import React, {Component} from 'react';

class ReportComponent extends Component {

    render() {
        return (
         <div>
                <button name="Report" id="report" onClick={e => this.props.onClick(e.target.name)}>Check Monthly Report</button>
            </div>
         );
    }
}


export default ReportComponent;

import React, {Component} from 'react';

class ButtonComponent extends Component {

    render() {
        return (
         <div className="button-design">
               
                <button name="("  id="bracket" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button name="CE" id="bracket" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button name=")"  id="bracket" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button name="C"  id="bracket" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>

                <button name="pow" id="special" onClick={e => this.props.onClick(e.target.name)}>apowb</button>
                <button name="fact" id="special" onClick={e => this.props.onClick(e.target.name)}>fact(a)</button>
                <button name="sqrt" id="special" onClick={e => this.props.onClick(e.target.name)}>sqrt(a)</button>
                <button name="cubrt" id="special" onClick={e => this.props.onClick(e.target.name)}>cubrt(a)</button><br/>
               

                <button name="1" id="number" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" id="number" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" id="number" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="+" id="symbol" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


                <button name="4" id="number" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" id="number" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" id="number" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="-" id="symbol" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button name="7" id="number" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" id="number" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" id="number" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="*" id="symbol" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


                <button name="." id="number" onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button name="0" id="number" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="=" id="number" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button name="div" id="symbol" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
               
                

            </div>
         );
    }
}


export default ButtonComponent;

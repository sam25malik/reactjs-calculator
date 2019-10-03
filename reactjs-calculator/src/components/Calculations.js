import React, { Component } from 'react';
import ShowAnsComponent from './ShowAnsComponent';
import ButtonComponent from "./ButtonComponent";
import ReportComponent from './ReportComponent'; 
import ShowReport from './ShowReport';
import {reactLocalStorage} from 'reactjs-localstorage';
 
class Calculations extends Component {
    constructor(){
        super();

        this.state = {
            ans: "",
            showReport:[],
            flag:0,
            operation:''
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }
        else if(button=="Report"){
            this.report()
        }
        else if((button=='+' || button=='-' || button=='*' || button=='div'  || button=='pow') && this.state.flag==0)
        {
            this.setState({
                ans: this.state.ans + button,
                flag:1,
                operation:button
            })
        }
        else if((button=='+' || button=='-' || button=='*' || button=='div' || button=='pow') && this.state.flag==1)
        {
            this.calculate(button);
        }
        else if((button=='sqrt' || button=='cubrt'  || button=='fact') &&  this.state.flag==0){
            this.setState({
                ans:button,
                operation:button,
                flag:1
            })
        }
        else if((button=='sqrt' || button=='cubrt'  || button=='fact') &&  this.state.flag==1){
            this.setState({
                ans:button,
                operation:button
            })     
        }
        else if((this.state.operation=='sqrt' || this.state.operation=='cubrt' || this.state.operation=='fact') && button==')')
        {
            this.root();
        }
        else {
            this.setState({
                ans: this.state.ans + button
            })
        }
    };

     root = () => {
        var checkOperation = ''
        console.log(this.state.ans);
        var value1;
        var count_sqrt=0,count_cubrt=0,count_fact=0;
        if(this.state.operation=='sqrt'){
            checkOperation='square_root';
            count_sqrt+=1;
            value1 = this.state.ans.split("sqrt(")[1];
            console.log(value1);
        }
        else if(this.state.operation=='cubrt'){
            checkOperation='cuberoot';
            count_cubrt+=1;
            value1 = this.state.ans.split("cubrt(")[1];
            console.log(value1);
        }
        else if(this.state.operation=='fact'){
            checkOperation='factorial';
            count_fact+=1;
            value1 = this.state.ans.split("fact(")[1];
            console.log(value1);
        }


        const that = this;    
        
        const url = 'http://localhost:5000/calculator/'+checkOperation; 
        
        fetch(url, {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body:JSON.stringify({
                    "a": parseFloat(value1)
                })
              }).then(function(response) {
                    console.log(response.body);
                    if(response.ok)
                    {
                      console.log(response);
                      response.json().then(function(data) {
                      console.log(data);        
                      //console.log(data.count_arr[1]);
                      that.setState({
                            ans:(data.solution).toString(),
                            operation:'',
                            flag:0
                       })
                      var local = reactLocalStorage.getObject('daily_count');
                      console.log(local);
                      if(Object.entries(local).length!=0){
                         reactLocalStorage.setObject('daily_count',{'daily': {'sum':local['daily']['sum'],'substract':local['daily']['substract'],'multiple':local['daily']['multiple'],'divide':local['daily']['divide'],'sqrt':local['daily']['sqrt']+count_sqrt,'qubrt':local['daily']['qubrt']+count_cubrt,'power':local['daily']['power'],'factorial':local['daily']['factorial']+count_fact}});
                         
                       }
                       else{
                        reactLocalStorage.setObject('daily_count',{'daily': {'sum':0,'substract':0,'multiple':0,'divide':0,'sqrt':0,'qubrt':0,'power':0,'factorial':0}});
                       }
                    });
                    }
                    else
                    {
                      console.log('invalid');
                    }
                }).catch(function(err) {
                   that.setState({
                        ans: "error"
                   })
        });    

    };

     

    calculate = (button) => {
        console.log(button);
        var checkOperation = ''
        console.log(this.state.ans);
        var value1,value2;
        var count_sum=0,count_min=0,count_mul=0,count_div=0,count_pow=0;
        if(this.state.operation=='+'){
            checkOperation='add';
            count_sum+=1;
            value1 = this.state.ans.split("+")[0];
            value2 = this.state.ans.split("+")[1];
            console.log(value1,value2);
        }
        else if(this.state.operation=='-'){
            checkOperation='substract';
            count_min+=1;
            value1 = this.state.ans.split("-")[0];
            value2 = this.state.ans.split("-")[1];
            console.log(value1,value2);
        }
        else if(this.state.operation=='*'){
            checkOperation='multiply';
            count_mul+=1;
            value1 = this.state.ans.split("*")[0];
            value2 = this.state.ans.split("*")[1];
            console.log(value1,value2);
        }

        else if(this.state.operation=='div'){
            checkOperation='divide';
            count_div+=1;
            value1 = this.state.ans.split("div")[0];
            value2 = this.state.ans.split("div")[1];
            console.log(value1,value2);
        }
        else if(this.state.operation=='pow'){
            checkOperation='power';
            count_pow+=1;
            value1 = this.state.ans.split("pow")[0];
            value2 = this.state.ans.split("pow")[1];
            console.log(value1,value2);
        }
        


        const that = this;    
        
        const url = 'http://localhost:5000/calculator/'+checkOperation; 
        
        fetch(url, {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body:JSON.stringify({
                    "a": parseFloat(value1),
                    "b": parseFloat(value2)
                })
              }).then(function(response) {
                    console.log(response.body);
                    if(response.ok)
                    {
                      console.log(response);
                      response.json().then(function(data) {
                      console.log(data);        
                      that.setState({
                            ans:(data.solution).toString(),
                            operation:'',
                            flag:0
                       })
                      var local = reactLocalStorage.getObject('daily_count');
                      console.log(local);
                      if(Object.entries(local).length!=0){
                         reactLocalStorage.setObject('daily_count',{'daily': {'sum':local['daily']['sum']+count_sum,'substract':local['daily']['substract']+count_min,'multiple':local['daily']['multiple']+count_mul,'divide':local['daily']['divide']+count_div,'sqrt':local['daily']['sqrt'],'qubrt':local['daily']['qubrt'],'power':local['daily']['power']+count_pow,'factorial':local['daily']['factorial']}});
                         
                       }
                       else{
                        reactLocalStorage.setObject('daily_count',{'daily': {'sum':0,'substract':0,'multiple':0,'divide':0,'sqrt':0,'qubrt':0,'power':0,'factorial':0}});
                       }
                    });
                    }
                    else
                    {
                      console.log('invalid');
                    }
                }).catch(function(err) {
                   that.setState({
                        ans: "error"
                   })
        });    

    };

    reset = () => {
        this.setState({
            ans: "",
            flag:0
        })
    };

    backspace = () => {
        console.log(this.state.ans);
        if (this.state.ans.slice(-1) >= '0' && this.state.ans.slice(-1) <= '9') {
            
        }
        else{
            this.setState({
            flag: 0
        })
    
        }
        this.setState({
            ans: this.state.ans.slice(0, -1)
        })
    };

    report = () => {
        var local = reactLocalStorage.getObject('daily_count');
        console.log(local);             
        var arr = [local['daily']['sum'],local['daily']['substract'],local['daily']['multiple'],local['daily']['divide'],local['daily']['sqrt'],local['daily']['qubrt'],local['daily']['power'],local['daily']['factorial']]
        this.setState({
            showReport:arr
        })
    };


    render() {
        return (
            <div>
                <ReportComponent onClick={this.onClick}/>
                <ShowReport showReport={this.state.showReport}/>
                <div className="design-calc">
                    <h1>CalcuCo</h1>
                    <ShowAnsComponent ans={this.state.ans}/>
                    <ButtonComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default Calculations;

import React, {Component} from 'react';
import '../stylesheets/Rule.css';

class Rule extends Component { 
  constructor(props) {
    super(props);
    
    this.state = {ruleHeaderClass: "rule-header " + (!this.props.result ?"failed" :"")}                  
  }

  render(){
    return (
      <div className="rule">  
        <div className={this.state.ruleHeaderClass}>  
          <span className="id">{this.props.id}</span>
          <span className="title">{this.props.title}</span>
        </div>
        <div className="rule-body row">
          <div className="body field col-1">
            <span>Rule Body:</span>
            <div>{this.props.body.toString()}</div>
          </div>                    
          <div className="true-id field col-2">
            <span>Next rule_id if passed</span>
            <div>{this.props.true_id}</div>
          </div>
          <div className="false-id field col-2">
            <span>Next rule_id if failed</span>
            <div>{this.props.false_id} </div>
          </div>        
        </div>
      </div>    
    )  
  }
};

export default Rule;

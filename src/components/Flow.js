import React, {Component} from 'react';
import Rule from './Rule'
import '../stylesheets/Flow.css';

class Flow extends Component {  
  constructor(props) {
    super(props);
    
    this.state = {initialRules: this.props.rules, checkedRules: [], entry: this.props.entry}                  
  }

  checkRule(id, entry){
    var rulesList = this.state.initialRules;
    var checkedRules = this.state.checkedRules;

    // check loop in circular chains
    var rule = checkedRules.filter((r)=>r.id === id)[0];          
    if (rule !== undefined) return;

    // check loop in circular chains
    rule = rulesList.filter((r)=>r.id === id)[0];    
    if (rule === undefined) return;    

    checkedRules.push(rule);
    this.setState({checkedRules: checkedRules});

    // check end of chain
    if (rule.body === undefined) return;
    if (rule.true_id === undefined || rule.false_id === undefined){
      rule.result = true;
      return;
    } 
    rule.result = rule.body(entry);      

    this.checkRule(rule[rule.result+"_id"], entry);      
  }

  componentDidMount() {  
    var firstRule = this.state.initialRules[0];
    var entry = this.state.entry;
    this.checkRule(firstRule.id, entry);
  }

  render(){
    return (  
      <div className="flow">
        <div className="entry">
          <div>Entry: {this.state.entry.toString()}</div>
          <span>Entry Rules:</span>
          <div><pre>{JSON.stringify(this.state.initialRules, null, 2) }</pre> </div>
        </div>                    
      {
        this.state.checkedRules.map((item) => {     
            return <Rule key={item.id}
              id={item.id} 
              title={item.title}
              body={item.body}
              true_id={item.true_id}
              false_id={item.false_id}
              result={item.result}/>
        })
       }
      </div>
    );
  }

}

export default Flow;

import NavBar from './components/navbar';
import React, { Component } from 'react';
import Counters from './components/counters';

import './App.css';

class App extends Component {
  state = {  
    counters:[
        {id:1,value:4},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0}
    ]
};

constructor(props){
  super(props);
  console.log('App-Constructor');
  
}
componentDidMount(){
  // Ajax call
  console.log("App-Mounted");
}

handleRest=()=>{
    const updatereset =this.state.counters.map(c=>{
        c.value=0; return c;
    });
    this.setState({counters:updatereset});
}

handleDelete=counterId=>{
    const newcounters = this.state.counters.filter(c=>c.id !== counterId);
    this.setState({counters:newcounters});
    

    // console.log("Event handler called",counterId);
  

}
handleIncrement=(a)=>{
    const counters =[...this.state.counters];
    this.setState({counters:counters});
    const index = counters.indexOf(a);
    counters[index]={...a};
    counters[index].value++;
    this.setState({counters});
    console.log(this.state.counters);
     console.log(counters);
};
handleDecrement=(a)=>{
    const counters =[...this.state.counters];
    this.setState({counters:counters});
    const index = counters.indexOf(a);
    counters[index]={...a};
    counters[index].value--;
    this.setState({counters});
    
    
   console.log(counters);
}
  render (){
    console.log("App Rendered");
    return (
      
      
      <React.Fragment>
        
      <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
      <main className="container">
        <Counters
        counters={this.state.counters}
        onReset={this.handleRest}
        OnIncrement={this.handleIncrement}
        onDelete={this.handleDelete}
        onDecrement={this.handleDecrement}
        />
        
      </main>
      </React.Fragment>
    
    );
  }
}

export default App;

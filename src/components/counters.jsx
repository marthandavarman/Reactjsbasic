import React, { Children, Component } from 'react'
import Counter from './counter'

class Counters extends Component {
    
    render() { 
        console.log("Counters rendered");
        const {onReset,onDelete,OnIncrement,counters,onDecrement}=this.props;
        // console.log(Children);
        return (<div>
            <button onClick={onReset} className='btn btn-primary btn-sm m-2'>Reset</button>
            {counters.map(storevariablecounter=>
            <Counter
             key={storevariablecounter.id} 
            // value={storevariablecounter.value} 
            onDelete={onDelete} 
            OnIncrement={OnIncrement}
            onDecrement={onDecrement}
            
            // id={storevariablecounter.id} 
            storevariablecounter={storevariablecounter}
            >
            <h4>Product Item{ storevariablecounter.id}</h4>

            </Counter> 
            )}
            </div>);
    }
}
 
export default Counters;
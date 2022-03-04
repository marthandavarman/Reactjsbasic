import React, { Component } from 'react';

// Jsx
// Rendering List
// Conditional Rendering
// handaling <Events></Events>
// updating the state

// props data we give to Component
// state data local or private to that component private it only


class Counter extends Component {

    componentDidUpdate(prevProps,prevState){
        console.log("PrevProps",prevProps);
        console.log("PrevState",prevState);
        // if(prevProps.counter.value!==this.props.counter.value){
        //     // Ajax call
        // }
    };

    componentWillUnmount(){
        console.log("componentUnmount");
    }

    // state={
    //     count:this.props.storevariablecounter.value,
    //     // tags:['tag1','tag2','tag3']
    // };   
    // styles={
    //     fontSize:10,
    //     fontWeight:'bold'
    // };

    // constructor(){
    //     super();
    //     console.log("Constructor",this);
    // }

    // handleIncrement=(product)=>{
    //     // console.log("Increment Clicked",this);
    //     // this.state.count++;
    //     console.log(product);
    //     this.setState({count:this.state.count+1})


    // };
    // doHandleIncrement=()=>{
        
    //     this.handleIncrement({id:1})

    // }
    // handleDecrement=(product)=>{
    // //    console.log("Button Clicked",this);
    // console.log(product);
    //    this.setState({count:this.state.count-1});
    // }
    // doHandleDecrement=()=>{


    // }

    // renderTags(){
    //     if (this.state.tags.length===0) return <p>There are no tags!</p>;
    //     return <ul>
                
    //     {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
        
    // </ul>;
    // }  Rendering Tags function
    render() { 
        
        console.log("Counter rendered");
        // console.log("prop",this.props);  All react component has a property called props contains all attributes to use and modify in another components use console.log to view
        // console.log(this.props);
        return (<div>

            {/* <h4>Counter #{this.props.id}</h4> we can use either one children or props based on parent counter or children property */}
            {this.props.children}

            <span style={this.styles} className ={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={()=>this.props.OnIncrement(this.props.storevariablecounter)} className='btn btn-success btn-sm'>Increment</button>
            <span>  <button onClick={()=>this.props.onDecrement(this.props.storevariablecounter)} className='btn btn-secondary btn-sm'>Decrement</button></span>   

            <span>  <button onClick={()=>this.props.onDelete(this.props.storevariablecounter.id)} className='btn btn-danger btn-sm'>Delete</button></span>   
            
            {/* {this.state.tags.length===0 && "Please add the Tags!"}
            {this.renderTags()}   Shows the tag function and listing */}
            
            </div>
            );
        }
    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.storevariablecounter.value === 0) ? "warning" : "primary";
        return classes;
    }

        formatCount(){
            const{value}=(this.props.storevariablecounter);
            return value === 0?'Zero':value;

        }
}
 
export default Counter;
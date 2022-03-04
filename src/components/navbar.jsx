import React, { Component } from 'react'

// Stateless Functional component add props in method parameter and remove this in dynamic
// destructring arguments
const Navbar = ({totalCounters})=>{
    console.log("Nav bar Rendered");
    return (
        <nav className="navbar navbar-light bg-light">
<div className="container-fluid">
<a className="navbar-brand" href="#">Navbar 
<span className="badge rounded-pill bg-info text-dark">{totalCounters}</span></a>
</div>
</nav>
    );
};


export default Navbar;
import React, {Component} from 'react';
import {Navbar,NavbarBrand,Jumbotron,Nav,NavbarToggler,Collapse,NavItem} from 'reactstrap'
import { NavLink } from 'react-router-dom'
class Header extends Component{
    
    constructor(props){
        
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state={
            isNavOpen: false

        };
       


    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });

    }
    render(){
        return(
        <div>
        <Navbar dark expand="md">
        <div className = 'container'>
            <NavbarToggler onClick={this.toggleNav}/>
            <NavbarBrand className="mr-auto" href = '/'> Ristorante Con Fusion 
                <img src="assets/images/logo.png" height="30" width="30" alt="Ristorante Con Fusion"/>
            </NavbarBrand> 
        <Collapse isOpen={this.state.isNavOpen} navbar>
        <Nav Navbar>
            <NavItem>
                <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home da-lg"></span>Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/home">
                    <span className="fa fa-info da-lg"></span>About Us
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list da-lg"></span>List
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/home">
                    <span className="fa fa-address-card da-lg"></span>Contact Us
                </NavLink>
            </NavItem>
        </Nav>
        </Collapse>
        </div> 
        </Navbar> 
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Ristorante Con fusion</h1>
                        <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>

                    </div>
                </div>
                </div>
        </Jumbotron>
        </div>
        )
    }
}
export default Header;

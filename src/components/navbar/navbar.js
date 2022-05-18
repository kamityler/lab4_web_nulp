import {Component} from 'react'

import './navbar.css'

class NavBar extends Component{
    constructor(props){
        super(props);
    }

    
    render(){
        return(
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">Chess</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="https://www.chess.com/articles">Rules</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="https://www.chess.com/puzzles/problem/491418">Tasks</a>
                        </li>
                    </ul>
                    <button class="btn btn-outline me-2" type="button">Sign Up</button>
                    <button class="btn btn-outline" type="button">Sign In</button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
import {Component} from 'react'

import ChessTable from '../chess-table/chess-table';
import NavBar from '../navbar/navbar';
// import Chart from '../chart/chart';

import './app.css'

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="app">
                <NavBar/>
                <ChessTable/>
            </div>
        );
    }
}

export default App;
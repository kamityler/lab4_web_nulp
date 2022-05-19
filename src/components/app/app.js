import {Component} from 'react'

import ChessTable from '../chess-table/chess-table';
import NavBar from '../navbar/navbar';
import Timer from '../timer/timer';
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
                <div className="row">
                    <div className="col-md-auto"><ChessTable/></div>
                    <div className="col-md-auto"><Timer/></div>
                    <div className="col-md-auto"></div>
                </div>

            </div>
        );
    }
}

export default App;
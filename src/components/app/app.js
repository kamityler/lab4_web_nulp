import {Component} from 'react'

import ChessTable from '../chess-table/chess-table';
import NavBar from '../navbar/navbar';
import Timer from '../timer/timer';
import Chart from '../chart/chart';


import './app.css'

class App extends Component{

    

    render(){
        const pawns = document.querySelectorAll(".pawn").length,
            bishops = document.querySelectorAll(".bishop").length,
            knights = document.querySelectorAll(".knight").length,
            rooks = document.querySelectorAll(".rook").length,
            queens = document.querySelectorAll(".queen").length,
            kings = document.querySelectorAll(".king").length;
        return(
            <div className="app">
                <NavBar/>
                <div className="row">
                    <div className="col-md-auto"><ChessTable/></div>
                    <div className="col-md-auto"><Timer/></div>
                    <div className="col-md-auto"><Chart/></div>
                </div>

            </div>
        );
    }
}

export default App;
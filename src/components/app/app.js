import React from 'react'
import ChessTable from '../chess-table/chess-table';
import NavBar from '../navbar/navbar';
import Timer from '../timer/timer';
import Chart from '../chart/chart';



import './app.css'

const App =()=>{

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

export default App;
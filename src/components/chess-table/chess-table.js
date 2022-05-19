import './chess-table.css'

function ChessTable(){

    return(
        <div className="container">
            <table className="chess-board table-light">
            <tbody>
                <tr>
                    <td className="light">
                        <div className="numeric-font numeric-pos dark-font">8</div>
                    </td>
                    <td className="dark"></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                </tr>
                <tr>
                    <td className="dark">
                        <div className="numeric-font numeric-pos light-font">7</div>
                    </td>
                    <td className="light"></td>
                    <td className="dark"></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                    <td className="light"></td>
                </tr>
                <tr>
                    <td className="light">
                        <div className="numeric-font numeric-pos dark-font">6</div>
                    </td>
                    <td className="dark"></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                    <td className="light"><img src="https://images.chesscomfiles.com/chess-themes/pieces/gothic/150/bp.png"
                            className=".chess-piece" id="pawn" alt="black pawn"/></td>
                    <td className="dark"><img src="https://images.chesscomfiles.com/chess-themes/pieces/gothic/150/bq.png"
                        className=".chess-piece" id="queen" alt="black queen"/></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                </tr>
                <tr>
                    <td className="dark">
                        <div className="numeric-font numeric-pos light-font">5</div>
                    </td>
                    <td className="light"></td>
                    <td className="dark"><img src="https://images.chesscomfiles.com/chess-themes/pieces/gothic/150/wr.png"
                        className=".chess-piece" id="rook" alt="qwhite rook"/></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                    <td className="light"><img src="https://images.chesscomfiles.com/chess-themes/pieces/gothic/150/bp.png"
                            className=".chess-piece" id="pawn" alt="ableck pawn"/></td>
                </tr>
                <tr>
                    <td className="light">
                        <div className="numeric-font numeric-pos dark-font">4</div>
                    </td>
                    <td className="dark"><img src="https://images.chesscomfiles.com/chess-themes/pieces/gothic/150/br.png"
                        className=".chess-piece" id="rook" alt="black rook"/></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                </tr>
                <tr>
                    <td className="dark">
                        <div className="numeric-font numeric-pos light-font">3</div>
                    </td>
                    <td className="light"></td>
                    <td className="dark"></td>
                    <td className="light"></td>
                    <td className="dark"><img src="https://images.chesscomfiles.com/chess-themes/pieces/gothic/150/wk.png"
                        className=".chess-piece" id="king" alt="white kring"/></td>
                    <td className="light"><img src="https://images.chesscomfiles.com/chess-themes/pieces/gothic/150/wp.png"
                            className=".chess-piece" id="pawn" alt="white pawn"/></td>
                    <td className="dark"></td>
                    <td className="light"><img src="https://images.chesscomfiles.com/chess-themes/pieces/gothic/150/bk.png"
                            className=".chess-piece" id="king" alt="black kang"/></td>
                </tr>
                <tr>
                    <td className="light">
                        <div className="numeric-font numeric-pos dark-font">2</div>
                    </td>
                    <td className="dark"></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                    <td className="light"></td>
                    <td className="dark"></td>
                </tr>
                <tr>
                    <td className="dark">
                        <div className="numeric-font light-font">1</div>
                        <div className="numeric-font letter-pos light-font">a</div>
                    </td>
                    <td className="light">
                        <div className="numeric-font letter-pos dark-font"> b</div>
                    </td>
                    <td className="dark">
                        <div className="numeric-font letter-pos light-font">c</div>

                    </td>
                    <td className="light">
                        <div className="numeric-font letter-pos dark-font">d</div>
                    </td>
                    <td className="dark">
                        <div className="numeric-font letter-pos light-font">e</div>
                    </td>
                    <td className="light">
                        <div className="numeric-font letter-pos dark-font">f</div>
                    </td>
                    <td className="dark">
                        <div className="numeric-font letter-pos light-font">g</div>
                    </td>
                    <td className="light">
                        <div className="numeric-font letter-pos dark-font">h</div>
                    </td>
                </tr>

            </tbody>
        </table>
        </div>
    );
}

export default ChessTable;
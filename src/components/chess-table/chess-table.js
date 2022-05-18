import './chess-table.css'

function ChessTable(){

    return(
        <div className="container">
            <table class="chess-board">
            <tbody>
                <tr>
                    <td class="light">
                        <div class="numeric-font numeric-pos dark-font">8</div>
                    </td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark">
                        <div class="numeric-font numeric-pos light-font">7</div>
                    </td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                </tr>
                <tr>
                    <td class="light">
                        <div class="numeric-font numeric-pos dark-font">6</div>
                    </td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"><img src="https://images.chesscomfiles.com/chess-themes/pieces/gothic/150/bp.png"
                            class=".chess-piece" id="pawn" alt="black pawn"/></td>
                    <td class="dark"><img src="https://images.chesscomfiles.com/chess-themes/pieces/gothic/150/bq.png"
                        class=".chess-piece" id="queen" alt="black queen"/></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark">
                        <div class="numeric-font numeric-pos light-font">5</div>
                    </td>
                    <td class="light"></td>
                    <td class="dark"><img src="https://images.chesscomfiles.com/chess-themes/pieces/gothic/150/wr.png"
                        class=".chess-piece" id="rook" alt="qwhite rook"/></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"><img src="https://images.chesscomfiles.com/chess-themes/pieces/gothic/150/bp.png"
                            class=".chess-piece" id="pawn" alt="ableck pawn"/></td>
                </tr>
                <tr>
                    <td class="light">
                        <div class="numeric-font numeric-pos dark-font">4</div>
                    </td>
                    <td class="dark"><img src="https://images.chesscomfiles.com/chess-themes/pieces/gothic/150/br.png"
                        class=".chess-piece" id="rook" alt="black rook"/></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark">
                        <div class="numeric-font numeric-pos light-font">3</div>
                    </td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"><img src="https://images.chesscomfiles.com/chess-themes/pieces/gothic/150/wk.png"
                        class=".chess-piece" id="king" alt="white kring"/></td>
                    <td class="light"><img src="https://images.chesscomfiles.com/chess-themes/pieces/gothic/150/wp.png"
                            class=".chess-piece" id="pawn" alt="white pawn"/></td>
                    <td class="dark"></td>
                    <td class="light"><img src="https://images.chesscomfiles.com/chess-themes/pieces/gothic/150/bk.png"
                            class=".chess-piece" id="king" alt="black kang"/></td>
                </tr>
                <tr>
                    <td class="light">
                        <div class="numeric-font numeric-pos dark-font">2</div>
                    </td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark">
                        <div class="numeric-font light-font">1</div>
                        <div class="numeric-font letter-pos light-font">a</div>
                    </td>
                    <td class="light">
                        <div class="numeric-font letter-pos dark-font"> b</div>
                    </td>
                    <td class="dark">
                        <div class="numeric-font letter-pos light-font">c</div>

                    </td>
                    <td class="light">
                        <div class="numeric-font letter-pos dark-font">d</div>
                    </td>
                    <td class="dark">
                        <div class="numeric-font letter-pos light-font">e</div>
                    </td>
                    <td class="light">
                        <div class="numeric-font letter-pos dark-font">f</div>
                    </td>
                    <td class="dark">
                        <div class="numeric-font letter-pos light-font">g</div>
                    </td>
                    <td class="light">
                        <div class="numeric-font letter-pos dark-font">h</div>
                    </td>
                </tr>

            </tbody>
        </table>
        </div>
    );
}

export default ChessTable;
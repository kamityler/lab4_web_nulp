import React,{useState} from 'react'

import './navbar.css'
import Modal from '../modal/modal';
import Form from '../form-sign/form';
import Sign from '../form-sign/sign';



const NavBar = () => {
    const [modalActive1,setModalActive1] = useState(false);
    const [modalActive2, setModalActive2] = useState(false);

    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#home">
                    <img className="logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprochesszone.com%2Fwp-content%2Fuploads%2F2020%2F01%2Flogo_favicon-42.png&f=1&nofb=1" alt="logo chess" width="1%"/>
                    Шахи
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="https://www.chess.com/articles">Правила</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="https://www.chess.com/puzzles/problem/491418">Завдання</a>
                    </li>
                </ul>
                <button className="btn btn-outline me-2" type="button" onClick={()=>{modalActive1?setModalActive1(false):setModalActive1(true)}}>Зареєструватись</button>
                <button className="btn btn-outline" type="button" onClick={()=>setModalActive2(true)}>Ввійти</button>
                <button className="btn btn-outline" type="button" onClick={()=>setModalActive2(true)}>БД</button>
                </div>
            </div>
            <Modal active={modalActive1} setActive={setModalActive1}><Form/></Modal>
            <Modal active={modalActive2} setActive={setModalActive2}><Sign/></Modal>
        </nav>
    );
}

export default NavBar;
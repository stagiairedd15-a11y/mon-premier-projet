import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from './tp4/Products';
import ListeProduits from './tp5/ListeProduits';
import ProductsClass from './ClassComponents/ProductsClass';
import Jeude from './ClassComponents/Jeude';
import Inscription from './Inscription';
import ValiderPassword from './ValiderPassword';
import App from './App';
import Connexion from './Connexion';
import Form from './Form';
import ArticleForm from './ArticleForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
const p1 = <p>Berkane</p>
const style1 = {
    listStyleType: "none",
    color: "red"
}
const style2 = {
    listStyleType: "square",
    color: "blue"
}
const stagiaire = ['anas', 'amine', 'karim', 'samir'];
const clr = ['red', 'blue', 'orange', 'tomato'];
///////////////////////////////////////////////////////////////////////
const liste =
    <ul
        id='liste1'
        // className='red' 
        // style={{listStyleType:"none",color:"blue"}}
        style={style1}
    >
        {
            // stagiaire.map(s => <li>{s}</li> )
            stagiaire.map((s, index) => <li key={index}>{s}</li>)
        }
    </ul>
////////////////////////////////////////////////////////////////////////
// const ListeElements = function () { // compesant
//     return <ul
//         id='liste1'
//         // className='red' 
//         // style={{listStyleType:"none",color:"blue"}}
//         style={style1}
//     >
//         {
//             // stagiaire.map(s => <li>{s}</li> )
//             stagiaire.map((s, index) => <li key={index}>{s}</li>)
//         }
//     </ul>
// }
const ListeElements = function (props) { // compesant
    return (
        <ul
            id='liste1'
            style={props.style}
        >
            {
                props.arr.map((s, index) => <li key={index}>{s}</li>)
            }
        </ul>
    )
}
const laptop = [
    {
        id: 1,
        title: 'PC Portable Gamer HP VICTUS',
        price: '7490 DH',
        thumbnail: 'HP16D0195NF.jpg'
    },
    {
        id: 2,
        title: 'PC Portable Gamer HP VICTUS',
        price: '2190 DH',
        thumbnail: 'HP14424U3EA.jpg'
    },
    {
        id: 3,
        title: 'Pc Portable Chromebook Acer',
        price: '3640 DH',
        thumbnail: 'NXATHEF002.jpg'
    },
    {
        id: 4,
        title: 'PC Portable - HUAWEI',
        price: '1270 DH',
        thumbnail: 'HUA6901443442959.jpg'
    },
];
const voitures = [
    {
        id: 1,
        title: 'c220',
        price: '80000 DH',
        thumbnail: 'c1.jpg'
    },
    {
        id: 2,
        title: 'W121',
        price: '79165',
        thumbnail: 'HP14424U3EA.jpg'
    },
    {
        id: 3,
        title: 'AMG',
        price: '364550 DH',
        thumbnail: 'NXATHEF002.jpg'
    },
    {
        id: 4,
        title: 'BYD',
        price: '12755420 DH',
        thumbnail: 'HUA6901443442959.jpg'
    },
];
const repas = [];
root.render(
    // <Inscription/>
    // <ValiderPassword/>
    // <App/>
    // <Connexion/>
    // <Form/>
    <ArticleForm/>

);

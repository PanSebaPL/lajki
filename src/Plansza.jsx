import lajk from './img/lajk.png';
import star from './img/star.png';
import './Plansza.css';
import { useState } from 'react';

function Plansza({k, rate}) {
    let [like, setLike] = useState(0);
    return(
        <div className="plansza">
            <p>
                <img className="grafika" src={k.grafika} 
                alt={k.opis} />
            </p>
            <button className='btnPlansza' onClick={rate}>
                <img src={lajk} alt="lubię" />
            </button>
            <p>lubi: {like}</p>

        </div>
    );
    function funLike()
    {
        setLike(like+1);
        
    }
}

export default Plansza

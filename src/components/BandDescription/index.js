import React from 'react';

import './BandDescription.css';

import iconLove from '../../assets/images/iconLove.jpg';

const BandDescription = ({
    titulo,
    musicas,
    deleteFunc,
    deleteBand,
}) => (

        <div className="container">

            <div className="Picture"><img className="" src={iconLove} width="100" height="95" /></div>
            <div className="holdInfo">
                <div className="titulo">
                    {' '}
                    <h4>{titulo}</h4>
                </div>
                <div className="description">
                    {' '}
                    <p>
                        {musicas ? musicas.length : '0'}
                        {' '}
          song(s) registered
          <input
                            type="checkbox"
                            value={titulo}
                            onClick={(e) => deleteFunc([...deleteBand, e.target.value])}
                            className="checkbox"
                        />
                    </p>
                </div>
            </div>

        </div>
    );

export default BandDescription;

import React from 'react';

import './BandDescription.css';

const BandDescription = ({
    titulo,
    musicas,
    deleteFunc,
    deleteBand,
}) => (

        <div className="container">

            <div className="Picture">no image found!</div>
            <div className="holdInfo">
                <div className="titulo">
                    {' '}
                    <h4>{titulo}</h4>
                </div>
                <div className="description">
                    {' '}
                    <p>
                        {musicas && musicas.length}
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

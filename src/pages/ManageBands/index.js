import React, { useState, useEffect } from 'react';

import PageDefault from '../PageDefault';
import BandDescription from '../../components/BandDescription';

import './deleteBand.css';

const ManageBands = () => {
    const [categories, setCategories] = React.useState([]);

    const [deleteBand, setDeleteBand] = React.useState([]);

    async function deleteSelectedBand() {
        if (deleteBand.length > 0) {
            for (const band of deleteBand) {
                const URL = `https://tranquil-beach-70411.herokuapp.com/videos/delete/${band}`;
                await fetch(URL, { method: 'delete' });
            }
            window.location.reload(true);
        }
    }

    React.useEffect(() => {
        async function getData() {
            const URL = 'https://tranquil-beach-70411.herokuapp.com/videos';
            const response = await fetch(URL);
            const data = await response.json();

            if (data) {
                console.log(data);
                setCategories([
                    ...data,
                ]);
            }
        }
        getData();
    }, []);
    return (

        // eslint-disable-next-line react/jsx-filename-extension
        <PageDefault>
            <div className="Supreme-Container-Leader">
                <div className="Container">
                    <div className="Title">
                        <h2>Manage Bands</h2>
                        <br />

                    </div>
                    <div className="Categories-container">
                        <div className="cat-title" />
                        <div className="Categories">
                            {categories ? categories.map((category) => (
                                <>
                                    <BandDescription
                                        titulo={category.titulo}
                                        musicas={category.musicas}
                                        deleteFunc={setDeleteBand}
                                        deleteBand={deleteBand}
                                    />
                                    <br />
                                </>
                            )) : (<h1>Loading...</h1>)}
                            <div className="holdButton">
                                <button className="delete" onClick={deleteSelectedBand}>Delete</button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </PageDefault>
    );
};

export default ManageBands;

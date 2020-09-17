/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../PageDefault';
import ButtonAdd from './styles';

import './AddVideo.css';

const AddVideo = () => {
  const [categories2, setCategories2] = useState([]);

  const [atualLink, setAtuaLink] = useState([{ nome: '', url: '' }]);

  const [musicName, setMusicName] = useState('');

  const [videoLinks, setVideoLinks] = useState();

  const [inputLinks, setInputLinks] = useState(['1']);

  const [bandName, setBandName] = useState('');

  const [password, setPassword] = React.useState(null);

  React.useEffect(() => {
    async function getData() {
      const URL = 'https://tranquil-beach-70411.herokuapp.com/videos';
      const response = await fetch(URL);
      const data = await response.json();

      if (data) {
        setCategories2([
          ...data,
        ]);
      }
    }
    getData();
  }, []);

  function captureLink(e) {
    setVideoLinks(e.target.value);
  }

  function captureName(e) {
    setMusicName(e.target.value);
  }

  function addVideoArray() {
    setAtuaLink([...atualLink, { nome: musicName, url: videoLinks }]);
  }

  function oneMoreField() {
    if (inputLinks.length >= 5) {
      setInputLinks([...inputLinks.splice(0, 5)]);
    } else {
      setInputLinks([...inputLinks, '1']);
    }

    setVideoLinks('');
  }

  function BandName(e) {
    setBandName(e.target.value);
  }

  async function sendToServer(e) {
    e.preventDefault();
    const URL = `https://tranquil-beach-70411.herokuapp.com/videos/update/${bandName}`;
    const bandsArray = atualLink.slice(1, atualLink.length);

    try {
      await fetch(URL, {
        method: 'post',
        mode: 'no-cors',

        body: await JSON.stringify({
          nome: bandName,
          cor: 'default',
          musicas: [{ nome: '', url: '' }],
          new_bands: bandsArray,
        }),
      });
    } catch (e) {
      console.log('lulz');
    }

    setInputLinks(null);
    setInputLinks(['1']);
  }

  return (
    <>
      <PageDefault>
        <div className="Supreme-Container-Leader">
          <div className="Container">
            <ButtonAdd as={Link} to="/add/category" className="buttonLink">
              New Band
            </ButtonAdd>

            <div className="Container-video">
              <div className="Title-video">
                <h1>Create New Video</h1>
              </div>
              <p>Select Band</p>
              <select className="option" onChange={(e) => BandName(e)}>
                <option value="">- Select One -</option>

                {categories2.map((category) => <option value={category.titulo}>{category.titulo}</option>)}
              </select>

              <form>
                <div>
                  <table className="tabela">
                    <th className="link">
                      Link
                    </th>
                    <th className="name">Name</th>
                    <th>  </th>
                  </table>
                </div>
                {inputLinks && inputLinks.map(() => (
                  <div className="form">
                    <button type="button" onClick={oneMoreField} className="butao">+</button>

                    <input className="input_link" onChange={(e) => captureLink(e)} type="" placeholder="Youtube URL" />

                    <input className="input_name" onChange={(e) => captureName(e)} type="" placeholder="Name" />
                    <input type="checkbox" className="checkbox" onClick={addVideoArray} />
                    <br />
                  </div>
                ))}

                <div className="center">
                  {password !== 'mellome' ? (
                    <>
                      <input onChange={(e) => setPassword(e.target.value)} className="input_pass" placeholder="Password" />
                    </>
                  ) : (
                      <button className="button_submit" type="submit" onClick={(e) => sendToServer(e)}>
                        Submit
                      </button>
                    )}
                </div>
              </form>
            </div>
          </div>
        </div>

      </PageDefault>
    </>
  );
};

export default AddVideo;

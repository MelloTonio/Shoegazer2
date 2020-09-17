import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../PageDefault';
import FormField from '../../components/FormField';

import './AddVideo.css';
import Table from '../../components/Table';
import Button from './styles';

import useForm from '../../components/Hooks/useForm';

const AddVideo = () => {
  const defaultValues = {
    name: '',
    description: '',
  };

  const { setValue, values, clearForm } = useForm(defaultValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getData() {
      const URL = 'https://tranquil-beach-70411.herokuapp.com/videos';
      const response = await fetch(URL);
      const data = await response.json();

      if (data) {
        setCategories([
          ...data,
        ]);
      }
    }
    getData();
  }, []);

  async function sendData() {
    await fetch('https://tranquil-beach-70411.herokuapp.com/videos', {
      method: 'post',
      mode: 'no-cors',

      body: await JSON.stringify({
        titulo: values.name,
        cor: 'default',
        musicas: [],
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    }).then((response) => response.json()).then((json) => console.log(json));
  }

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <PageDefault>
      <div className="Supreme-Container-Leader">
        <div className="Container">
          <div className="Title">
            <h2 className="create_band">Create New Band</h2>
            <br />
            <p>{values.name}</p>
          </div>
          <form
            className="Form"
            onSubmit={(e) => {
              setValue(defaultValues);
              sendData();
            }}
          >
            <FormField
              value={values}
              categories={categories}
              onChange={(e) => {
                setValue('name', e.target.value);
              }}

            />
          </form>
          <div className="Categories-container">
            <div className="cat-title">
              <h2>Bands</h2>
              <br />
              <Button className="manage_bands" as={Link} to="/manage/bands">Manage bands</Button>
            </div>
            <div className="Categories">
              <div className="tabler" />
              {
                categories.length === 0 && (
                  <div className="centered">
                    <img alt="carregando" height="100" src="https://media.giphy.com/media/8JT9yYAwcLqLMeySyL/giphy.gif" />
                  </div>
                )
              }
              {
                categories.length >= 1 && (
                  <div className="supreme-table">
                    <div className="table-helper">
                      <Table title="Band" rows={categories} />
                    </div>
                  </div>
                )
              }

              {// categories.map((categoria, i) => (
                // eslint-disable-next-line react/no-array-index-key
                // <li key={`${categoria}${i}`} className="categorie">
                // {categoria.titulo}
                // </li>
                // ))
              }

            </div>

          </div>

        </div>

      </div>

    </PageDefault>
  );
};

export default AddVideo;

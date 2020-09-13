/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';

import Img from '../../assets/images/pc.svg';
import './FormField.css';

const FormField = ({ value, onChange, categories }) => {
  const [password, setPassword] = React.useState(null);
  console.log(categories);

  const [buttonValue, setButtonValue] = React.useState(value.titulo);

  return (
    <>

      {categories && categories.length <= 4 ? (
        <>
          <div className="division">
            <label className="Text">Band Name</label>
            <input
              className="input"
              onChange={onChange}
              value={buttonValue}
            />
          </div>

          <div className="division">
            {password !== 'mellome' ? (
              <>
                <p>Digite a senha</p>
                <input onChange={(e) => setPassword(e.target.value)} className="input" />
                {' '}
              </>
            ) : (<button type="submit" className="Butao" onClick={() => setButtonValue('')}>Submit</button>)}
          </div>
        </>
      ) : (
          <>
            <div className="exceed">
              <p>Max number of bands exceeded</p>
              <img src={Img} width="150" style={{ marginTop: '40px' }} />
            </div>
          </>
        )}

    </>
  );
};

FormField.defaultProps = {
  onChange: () => { },
};

FormField.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func,
};

export default FormField;

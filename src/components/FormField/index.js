/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';

import Img from '../../assets/images/pc.svg';
import './FormField.css';

const FormField = ({ value, onChange, categories }) => {
  const [password, setPassword] = React.useState(null);

  const [buttonValue, setButtonValue] = React.useState(value.titulo);

  return (
    <>

      {categories && categories.length <= 4 ? (
        <>
          <div className="division">
            <div className="label-float">
              <input
                className="input"
                onChange={onChange}
                value={buttonValue}
                placeholder="  "
              />
              <label className="Text">Band</label>
            </div>
          </div>
          <div className="division">
            {password !== 'mellome' ? (
              <>
                <div className="label-float">
                  <input onChange={(e) => setPassword(e.target.value)} className="input" placeholder="  " />
                  <label className="Text">Password</label>
                </div>
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

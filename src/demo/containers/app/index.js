import FormContractor from 'react-form-contractor';
import JSONEditor from 'react-json-editor-ajrm';
import React, { useState } from 'react';
import locale from 'react-json-editor-ajrm/locale/en';

import HammerIcon from '../../components/hammer';
import Octocat from '../../components/octocat';
import { formData } from '../../constants/formData';

import './style.scss';

const App = () => {
  const [
    _formData,
    setFormData,
  ] = useState(formData);
  const [
    formValues,
    setFormValues,
  ] = useState({});

  const handleEditorChange = (event) => {
    setFormData(event.jsObject);
  };
  const handleFormChange = (event) => {
    setFormValues(event);
  };

  return (
    <div className="form-contractor-demo__container">
      <div className="form-contractor-demo__header__wrapper">
        <div className="form-contractor-demo__header">
          <HammerIcon/>
          <h1 className="form-contractor-demo__title">
            react-form-contractor
          </h1>
        </div>
        <Octocat/>
      </div>
      <main className="form-contractor-demo__main">
        <div className="form-contractor-demo__main--intro">
          <h2>Have your form built instantly with JSON contract</h2>
          <p>Given JSON data on your form and components, <code>react-form-component</code> will dynamically generate a WAI-ARIA compliant form with built-in validators and other controls.</p>
        </div>
      </main>
      <div className="form-contractor-demo">
        <section className="form-contractor-demo__section">
          <h3>1) Provide form data in JSON</h3>
          <JSONEditor
            height="100%"
            id="form-contractor-demo__editor"
            locale={locale}
            placeholder={_formData}
            width="100%"
            onChange={handleEditorChange}
          />
        </section>
        <section className="form-contractor-demo__section">
          <h3>2) Let the <code>contractor</code> build the form</h3>
          <FormContractor
            formData={_formData}
            emitChangeOnLoad
            onChange={handleFormChange}
            onSubmit={handleFormChange}
          />
        </section>
        <section className="form-contractor-demo__section">
          <h3>3) Check out the generated value</h3>
          <JSONEditor
            height="100%"
            id="form-contractor-demo__viewer"
            locale={locale}
            placeholder={formValues}
            viewOnly
            width="100%"
          />
        </section>
      </div>
    </div>
  );
};

export default App;

import JSONEditor from 'react-json-editor-ajrm';
import React, {
  useState,
} from 'react';

import FormContractor from '../lib/form-contractor';
import HammerIcon from './components/hammer';
import Octocat from './components/octocat';
import defaultComponentsMap from '../lib/form-contractor/constants/defaultComponentsMap';
import { formData } from '../lib/form-contractor/formData';
import { isFormDataValid } from '../lib/form-contractor/lib/data-validator';

import './App.scss';

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

  isFormDataValid(_formData, defaultComponentsMap);
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
            id="form-contractor-demo__editor"
            height="100%"
            width="100%"
            placeholder={_formData}
            onChange={handleEditorChange}
          />
        </section>
        <section className="form-contractor-demo__section">
          <h3>2) Let <code>react-form-contractor</code> build the form for you</h3>
          <FormContractor
            formData={_formData}
            emitChangeOnLoad
            onChange={handleFormChange}
            onSubmit={handleFormChange}
          />
        </section>
        <section className="form-contractor-demo__section">
          <h3>3) Check out the dynamically generated value</h3>
          <JSONEditor
            id="form-contractor-demo__viewer"
            height="100%"
            width="100%"
            viewOnly
            placeholder={formValues}
          />
        </section>
      </div>
    </div>
  );
};

export default App;

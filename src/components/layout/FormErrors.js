import React from 'react';

export const NameErrors = ({ nameErrors }) => (
  <div className="formErrors">
    {Object.keys(nameErrors).map((fieldName, i) => {
      if (nameErrors[fieldName].length > 0) {
        return (
          <p key={i}>
            {fieldName} {nameErrors[fieldName]}
          </p>
        );
      } else {
        return '';
      }
    })}
  </div>
);

export const EmailErrors = ({ emailErrors }) => (
  <div className="formErrors">
    {Object.keys(emailErrors).map((fieldName, i) => {
      if (emailErrors[fieldName].length > 0) {
        return (
          <p key={i}>
            {fieldName} {emailErrors[fieldName]}
          </p>
        );
      } else {
        return '';
      }
    })}
  </div>
);

export const PhonenumberErrors = ({ phonenumberErrors }) => (
  <div className="formErrors">
    {Object.keys(phonenumberErrors).map((fieldName, i) => {
      if (phonenumberErrors[fieldName].length > 0) {
        return (
          <p key={i}>
            {fieldName} {phonenumberErrors[fieldName]}
          </p>
        );
      } else {
        return '';
      }
    })}
  </div>
);
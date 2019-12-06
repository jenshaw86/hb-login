import React from 'react';
import CardLayout from './CardLayout';
import displayForm from '../utils/displayForm';

export const FormCard = props => {
  const path = props.match.path;

  return (
    <CardLayout path={path} >
      {displayForm(path)}
    </CardLayout>
  )
}

export default FormCard;
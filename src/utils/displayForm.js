import React from 'react';
import Reset from '../components/Reset';
import Login from '../components/Login';

const displayForm = path => path === '/reset' ? <Reset /> : <Login path={path}/>


export default displayForm;
import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import Header from './components/Header';
import Login from './components/Login';
import Footer from './components/Footer';

describe ('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  
  it('contains Header, Login, and Footer components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).exists()).toBe(true);
    expect(wrapper.find(Login).exists()).toBe(true);
    expect(wrapper.find(Footer).exists()).toBe(true);
  })
})
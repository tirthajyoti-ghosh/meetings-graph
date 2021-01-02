import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// eslint-disable-next-line import/extensions
import App from './App.js';

Enzyme.configure({ adapter: new Adapter() });

describe('<LineChart /> with no props', () => {
  const container = shallow(<App />);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have a select tag', () => {
    expect(container.find('select').length).toEqual(1);
  });

  it('should have a chart div', () => {
    expect(container.find('.chart').length).toEqual(1);
  });
});

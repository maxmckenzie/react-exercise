/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import App from './App.jsx';

// let json = require('./schemas/sample.json');
// const data = Object.keys(json).map(x => json[x]);

describe('App', () => {
  const props = {
    //TODO add correct data props here
    data: [{ title: 'x' }, { title: 'y' }],
  };
  it('shows two elements', () => {
    const element = shallow(<App { ...props } />);

    expect(element.find('.info')).to.have.length(2);
  });
});

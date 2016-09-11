/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import App from './App.jsx';

// let json = require('./schemas/sample.json');
// const items = Object.keys(json).map(x => json[x]);

describe('App', () => {
  const props = {
    //TODO add correct items props here
    items: [{ title: 'x' }, { title: 'y' }],
  };
  it('shows two elements', () => {
    const element = shallow(<App { ...props } />);

    expect(element.find('.item')).to.have.length(2);
  });
});

/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import App from './App.jsx';

describe('App', () => {
  const props = {
    items: [{ title: 'x' }, { title: 'y' }],
  };
  it('shows two elements', () => {
    const element = shallow(<App { ...props } />);

    expect(element.find('.info__title')).to.have.length(2);
  });
});

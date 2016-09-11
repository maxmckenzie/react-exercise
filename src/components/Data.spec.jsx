/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import Data from './Data.jsx';

describe('Data', () => {
  const props = {
    items: [{ title: 'x' }, { title: 'y' }],
  };
  it('shows two elements', () => {
    const element = shallow(<Data { ...props } />);

    expect(element.find('.item')).to.have.length(2);
  });
});

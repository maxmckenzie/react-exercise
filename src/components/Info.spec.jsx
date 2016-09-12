/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import App from './Info.jsx';

describe('Info', () => {
  const props = {
    props: [{ title: 'x' }, { description: 'y' }, { version: 'z' }],
  };
  it('shows the API Info', () => {
    const element = shallow(<App { ...props } />);

    expect(element.find('.info__title')).to.have.length(1);
  });
});

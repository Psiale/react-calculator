import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Display from '../../Display';

configure({ adapter: new Adapter() });

describe('Describe the display component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Display result="0" />).toJSON;
    expect(tree).toMatchSnapshot();
  });

  it('displays the result parameter as the text', () => {
    const wrapper = shallow(<Display result="10" />);
    const text = wrapper.find('p').text();
    expect(text).toContain('10');
  });
});

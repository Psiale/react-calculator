import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from '../Button';

configure({ adapter: new Adapter() });

describe('Button Component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Button name="0" />).toJSON;
    expect(tree).toMatchSnapshot();
  });

  it('should have the name property displayed inner content ', () => {
    const wrapper = shallow(<Button name="0" />);
    const text = wrapper.text();
    expect(text).toContain('0');
  });
});

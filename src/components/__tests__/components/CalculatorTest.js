import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import ButtonPanel from '../../ButtonPanel';
import Display from '../../Display';
import Calculator from '../../Calculator';
import Navbar from '../../Navbar';
import Button from '../../Button';

configure({ adapter: new Adapter() });
const mockfn = () => 'hello';

describe('calculator Component', () => {
  it('should have a navBar ', () => {
    const wrapper = shallow(<Calculator />);
    const navBar = wrapper.find(Navbar);
    expect(navBar).toHaveLength(1);
  });

  it('should have a Display ', () => {
    const wrapper = shallow(<Calculator />);
    const display = wrapper.find(Display);
    expect(display).toHaveLength(1);
  });

  it('should have a buttonPanel ', () => {
    const wrapper = shallow(<Calculator />);
    const buttonPanel = wrapper.find(ButtonPanel);
    expect(buttonPanel).toHaveLength(1);
  });
});

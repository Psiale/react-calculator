import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import NavBar from '../Navbar';
import Quote from '../Quote';

configure({ adapter: new Adapter() });

describe('Home Component', () => {
  it('should have a navBar ', () => {
    const wrapper = shallow(<Quote />);
    const navBar = wrapper.find(NavBar);
    expect(navBar).toHaveLength(1);
  });

  it('should have a h1 ', () => {
    const wrapper = shallow(<Quote />);
    const h1 = wrapper.find('h1');
    expect(h1).toHaveLength(1);
  });
});

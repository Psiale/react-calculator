import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import NavBar from '../Navbar';
import Home from '../Home';

configure({ adapter: new Adapter() });

describe('Home Component', () => {
  it('should have a navBar ', () => {
    const wrapper = shallow(<Home />);
    const navBar = wrapper.find(NavBar);
    expect(navBar).toHaveLength(1);
  });

  it('should have a h3 ', () => {
    const wrapper = shallow(<Home />);
    const h3 = wrapper.find('h3');
    expect(h3).toHaveLength(1);
  });

  it('should have 2 p elements ', () => {
    const wrapper = shallow(<Home />);
    const h3 = wrapper.find('p');
    expect(h3).toHaveLength(2);
  });
});

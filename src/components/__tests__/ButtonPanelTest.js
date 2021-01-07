import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import ButtonPanel from '../ButtonPanel';

configure({ adapter: new Adapter() });
const mockfn = () => 'hello';

describe('ButtonPanel Component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<ButtonPanel clickHandler={mockfn} />).toJSON;
    expect(tree).toMatchSnapshot();
  });

  it('should have the name property displayed inner content ', () => {
    const wrapper = shallow(<ButtonPanel clickHandler={mockfn} />);
    const btn = wrapper.find('Button');
    expect(btn).toHaveLength(19);
  });
});

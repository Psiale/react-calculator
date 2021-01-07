import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from '../Button';

configure({ adapter: new Adapter() });

describe('Button Component', () => {
  let wrapper; let
    clickHandler;
  beforeEach(() => {
    clickHandler = jest.fn();
    wrapper = shallow(
      <Button
        name="0"
        clickHandler={clickHandler}
      />,
    );
  });
  it('matches the snapshot', () => {
    const tree = renderer.create(<Button name="0" clickHandler={clickHandler} />).toJSON;
    expect(tree).toMatchSnapshot();
  });

  it('should have the name property displayed inner content ', () => {
    const text = wrapper.text();
    expect(text).toContain('0');
  });
});

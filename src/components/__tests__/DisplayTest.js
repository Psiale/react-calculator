import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Display from '../Display';

configure({ adapter: new Adapter() });

describe("Describe the display component", () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<Display result="0" />).toJSON;
        expect(tree).toMatchSnapshot();
      });
});

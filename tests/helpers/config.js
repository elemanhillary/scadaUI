import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {
  shallow, configure, render, mount,
} from 'enzyme';

configure({ adapter: new Adapter() });
export {
  shallow,
  render,
  mount,
};

export default Enzyme;

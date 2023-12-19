import { render, screen } from '@/test-utils';
import { Welcome } from './Welcome';

describe('Welcome component', () => {
  it('renders correctly with the expected gradient prop', () => {
    render(<Welcome />);
    // For example, check if the Title component has the correct class
    const titleComponent = screen.getByText('Welcome to');
    expect(titleComponent).toHaveClass('title');
  });
});

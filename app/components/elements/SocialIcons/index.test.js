import { screen, render } from '@testing-library/react';
import SocialIcons from './index';

describe('checking class for desktop', () => {
  it('should render with class for desktop', () => {
    render(<SocialIcons lDesktop={true} />);
    let socialIconElement = screen.getByTestId('socialIcon');
    expect(socialIconElement).toHaveClass('lDesktop');
  });
  it('should render without class for desktop', () => {
    render(<SocialIcons />);
    let socialIconElement = screen.getByTestId('socialIcon');
    expect(socialIconElement).not.toHaveClass('lDesktop');
  });
});

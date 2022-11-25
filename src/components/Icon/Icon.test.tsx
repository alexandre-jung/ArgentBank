import { render } from '@testing-library/react';

import { Icon } from '.';

describe('test', () => {
  it('should render', () => {
    const { container } = render(
      <Icon name="user" className="test-class" data-testid="bonjour" />
    );
    expect(container).toMatchSnapshot();
  });
});

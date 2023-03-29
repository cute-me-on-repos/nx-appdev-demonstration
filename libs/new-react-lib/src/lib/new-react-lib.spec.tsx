import { render } from '@testing-library/react';

import NewReactLib from './new-react-lib';

describe('NewReactLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewReactLib />);
    expect(baseElement).toBeTruthy();
  });
});

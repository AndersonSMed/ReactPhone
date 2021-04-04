import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import DialPad, { Props } from './Dialpad';

const numbers = Array.from('01234567890');

const defaultProps: Props = {
  onClick: jest.fn(),
  onCall: jest.fn()
}

test('Renders correctly', () => {
  const { getByText } = render(<DialPad {...defaultProps} />);

  numbers.forEach(number => {
    expect(getByText(number)).toBeVisible();
  });
});
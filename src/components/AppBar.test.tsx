import React from 'react';
import AppBar from './AppBar';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('App Bar component', () => {
  it('should render with title', () => {
    const appBar = render(<AppBar title={'Testing Title'} />);

    expect(appBar.getByText('Testing Title')).toBeInTheDocument();
  });
});

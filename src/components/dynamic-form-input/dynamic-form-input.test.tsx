import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<DynamicFormInput />', () => {
  test('it should mount', () => {
    
    const dynamicFormInput = screen.getByTestId('DynamicFormInput');

    expect(dynamicFormInput).toBeInTheDocument();
  });
});
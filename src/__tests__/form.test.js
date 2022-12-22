import React from 'react';
import { toHaveTextContent } from '@testing-library/jest-dom';
import { waitFor } from '@testing-library/react';
import { render, screen, fireEvent } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { lastCall } from 'jest-fetch-mock';

import Form from '../components/form/form';

describe('<Form />', () => {
    beforeEach(() => fetchMock.resetMocks());

    it('should render the form component', () => {
        render(<Form />);
        const loadingElement = screen.getByTestId('form');
        expect(loadingElement).toBeDefined();
    });
    it('should detect the text in the form', () => {
        render(<Form />);
        const loadingElement = screen.getByTestId('form');
        expect(loadingElement).toHaveTextContent('First Name *First Name *Last Name *Last Name *Email *Email *Phone *Phone *Address *Address *Message *Message *Submit');
    });
})
import { render, screen } from '@testing-library/react';
import React from 'react';
import NotFound from './index.jsx';

describe('App tests', () => {
    it('should contains the header, home and footer', () => {
    render(<NotFound />);
        const message = screen.getByText(/NotFound/i);
        expect(message).toBeInTheDocument();
    });
});

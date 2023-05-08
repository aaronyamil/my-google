import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App.jsx';

describe('App tests', () => {
    it('should contains the header, home and footer', () => {
    render(<App />);
        const heading = screen.getByText(/Frontend Test/i);
        expect(heading).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeDisabled();
        const footer = screen.getByText(/@ Google 2021/i);
        expect(footer).toBeInTheDocument();
    });
});

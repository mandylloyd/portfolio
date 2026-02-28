import { render, screen } from '@testing-library/react'
import Header from './Header';


it('should have aria labels on every social navigational link', () => {
// Arrange
render(<Header />)

// Assert
expect(screen.getByRole('link', { name: 'Email' })).toBeInTheDocument();
expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument();
expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument();
expect(screen.getByRole('link', { name: 'Resume' })).toBeInTheDocument();
})

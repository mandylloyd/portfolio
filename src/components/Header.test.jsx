import { render, screen } from '@testing-library/react'
import Header from './Header';
import { axe } from 'vitest-axe'

it('should have aria labels on every social navigational link', () => {
    // Arrange
    render(<Header />)

    // Assert
    expect(screen.getByRole('link', { name: 'Email' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Resume' })).toBeInTheDocument();
})

it('should pass axe accessibilty tests', async () => {
    const { container } = render(<Header />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
})  
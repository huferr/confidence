import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import { Header } from '.'

describe('Header Component Test Suites', () => {
  it('has correct text wrapped in heading', () => {
    render(<Header />)
    expect(screen.getByLabelText('heading')).toHaveTextContent('Confidence System Challenge')
  })

  it('has logo image', () => {
    render(<Header />)
    expect(screen.getByAltText('Logo')).toBeTruthy();
  })
})
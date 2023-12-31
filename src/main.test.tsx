import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App'

test('should render hello world', () => {
    render(<App />)

    expect(screen.findByText('Hello world')).toBeTruthy()
})

import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from '../App/App.tsx'

test('should not render anything initially', () => {
    render(<App />)

    const text = screen.queryByText('Varun Kedia')

    expect(text).toBeFalsy()
})

async function sleep(time: number) {
    await new Promise((r) => setTimeout(r, time))
}

test('should  render name after 2 sec', async () => {
    render(<App />)
    await sleep(2000)

    const text = screen.getByText('Varun Kedia')

    expect(text).toBeTruthy()
})

import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from '../components/App/App.tsx'

test('should not render anything initially', () => {
    render(<App />)

    const text = screen.queryByText('Varun Kedia')

    expect(text).toBeFalsy()
})

test('should  render name after 1 sec', async () => {
    render(<App />)
    await sleep(1100)

    const text = screen.getByText('Varun Kedia')

    expect(text).toBeTruthy()
})

//

async function sleep(time: number) {
    await new Promise((r) => setTimeout(r, time))
}

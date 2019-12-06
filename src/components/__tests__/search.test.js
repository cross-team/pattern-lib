import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Search from '../search'
import searchIndex from './searchIndex.json'
import data from './data.json'
import '@testing-library/jest-dom/extend-expect'

describe('search', () => {
    it('filters results correctly', async () => {
        const { findByPlaceholderText, findByText } = render(<Search data={data} searchIndex={searchIndex}/>)
        const searchInput = await findByPlaceholderText(/search/i)
        fireEvent.change(searchInput, { target: { value: 'M' }})
        const modalResult = await findByText(/modal/i)
        const meterResult = await findByText(/meter/i)
        expect(modalResult).toHaveTextContent('Modal')
        expect(meterResult).toHaveTextContent('Password Strength Meter')
    })
})
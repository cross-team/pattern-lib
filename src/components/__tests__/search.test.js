import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Search from '../search'
import searchIndex from './searchIndex.json'
import data from './data.json'
import '@testing-library/jest-dom/extend-expect'
import ViewContextProvider from '../../context/view'

describe('search', () => {
    it('filters results correctly', async () => {
        const { findByPlaceholderText, findByText } = render(<ViewContextProvider>
                <Search data={data} searchIndex={searchIndex}/>
            </ViewContextProvider>)
        const searchInput = await findByPlaceholderText(/search/i)
        fireEvent.change(searchInput, { target: { value: 'S' }})
        const modalResult = await findByText(/sample/i)
        const meterResult = await findByText(/second/i)
        expect(modalResult).toHaveTextContent('Sample')
        expect(meterResult).toHaveTextContent('Second Pattern Again')
    })
})

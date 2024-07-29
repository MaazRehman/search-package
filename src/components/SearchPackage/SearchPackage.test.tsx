import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import SearchPackage from './SearchPackage';
import useGetPackageInfoSearchResult from '../../hooks/useGetPackageInfoSearchResult';

jest.mock('../../hooks/useGetPackageInfoSearchResult', () => jest.fn());

jest.mock('lodash', () => ({
    debounce: jest.fn((func) => func) // Provide a no-op debounce function
}));

describe('Package Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should call the debounced search function when input changes', async () => {
        // Render the component
        render(<SearchPackage />);

        const input = screen.getByPlaceholderText('input search text');

        fireEvent.change(input, { target: { value: '' } });

        await waitFor(() => {
            expect(useGetPackageInfoSearchResult).toHaveBeenCalledWith('');

        })
    });

    it('should render the input field with the correct placeholder', () => {
        render(<SearchPackage />);
        const input = screen.getByPlaceholderText('input search text');
        expect(input).toBeInTheDocument();
    });
});

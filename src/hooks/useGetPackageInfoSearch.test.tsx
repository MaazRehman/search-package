import { renderHook, waitFor } from "@testing-library/react";
import { usePackageInfo } from '../contexts/PackageContext';
import useGetPackageInfoSearchResult from './useGetPackageInfoSearchResult';
import { useLoadingContext } from "../contexts/LoadingContext";

jest.mock('../contexts/PackageContext', () => ({
    usePackageInfo: jest.fn()
}));

jest.mock('../contexts/LoadingContext', () => ({
    useLoadingContext: jest.fn()
}));

describe('useGetPackageInfoSearchResult', () => {
    const setPackagesMock = jest.fn();
    const setLoadingMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        (usePackageInfo as jest.Mock).mockReturnValue({
            setPackages: setPackagesMock,
            packages: []
        });
        (useLoadingContext as jest.Mock).mockReturnValue({ setLoading: setLoadingMock });

        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should fetch and set package info based on search input', async () => {
        const mockQuery = 'react';
        const mockResponse = [
            {
                name: 'maaz-package',
                homepage: 'https://maaz.com',
                stars: 123456
            }
        ];

        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => mockResponse
        });

        renderHook(() => useGetPackageInfoSearchResult(mockQuery));

        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledWith(
                `https://libraries.io/api/search?q=${mockQuery}&api_key=e34915a89f10834eb0e8eca35fe6b628&sort=stars`
            );

            expect(global.fetch).toHaveBeenCalledTimes(1);

            expect(setPackagesMock).toHaveBeenCalledWith([
                {
                    name: 'maaz-package',
                    owner: 'https://maaz.com',
                    stars: 123456
                }
            ]);
        });
    });

    it('does not fetch data when search input is empty', () => {
        renderHook(() => useGetPackageInfoSearchResult(''));

        expect(global.fetch).not.toHaveBeenCalled();
        expect(setPackagesMock).not.toHaveBeenCalled();
    });
});

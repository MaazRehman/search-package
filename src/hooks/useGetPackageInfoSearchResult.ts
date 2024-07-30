import { useEffect } from "react";
import { usePackageInfo } from "../contexts/PackageContext";
import { useLoadingContext } from "../contexts/LoadingContext";

/**
 * Custom hook to fetch package information based on the search query.
 *
 * @param {string} query - The search query to fetch package information.
 */
const useGetPackageInfoSearchResult = (query: string) => {
  const { setPackages, packages } = usePackageInfo();
  const { setLoading } = useLoadingContext();

  useEffect(() => {
    /**
     * Fetches package data from the Libraries.io API.
     * Updates the packages context and loading state based on the API response.
     */
    const fetchData = async () => {
      try {
        setLoading(true);
        /**
         * There is a problem with pagination; the API accepts page and per_page as query params,
         * but there is nowhere in the API response it indicates the total number of records.
         * Therefore, implementing pagination in numerical values is not possible.
         * One optimization we can do is fetch 5 records first and then fetch the rest of the data in the background.
         * The above workaround will have more render cycles, and pagination can load with a slight delay, which is not ideal for UX.
         */
        const response = await fetch(
            `https://libraries.io/api/search?q=${query}&api_key=e34915a89f10834eb0e8eca35fe6b628&sort=stars`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        const filteredPackage = result.map((item: any) => ({
          name: item?.name,
          owner: item?.homepage,
          stars: item?.stars,
        }));

        setPackages(filteredPackage);
        setLoading(false);
      } catch (err) {
        // This will report error in sentry where we have alerts
        console.error(err);
        setLoading(false);
      }
    };

    if (query) {
      fetchData();
    } else if (query === "" && packages.length > 0) {
      setPackages([]);
    }
  }, [query, setPackages]);
};

export default useGetPackageInfoSearchResult;
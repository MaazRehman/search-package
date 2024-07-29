import { useEffect } from 'react';
import {usePackageInfo} from "../contexts/PackageContext";
import {useLoadingContext} from "../contexts/LoadingContext";


const useGetPackageInfoSearchResult = (query: string) => {
    const { setPackages, packages} = usePackageInfo();
    const {setLoading} = useLoadingContext();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(`https://libraries.io/api/search?q=${query}&api_key=e34915a89f10834eb0e8eca35fe6b628&sort=stars`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();

                const filteredPackage = result.map((item: any) => ({
                    name: item?.name,
                    owner: item?.homepage,
                    stars: item?.stars
                }))

                setPackages(filteredPackage);
                setLoading(false)
            }catch(err) {
                console.error(err);
                setLoading(false)
            }

            }

        if (query) {
            fetchData();
        }else if(query === '' && packages.length > 0) {
            setPackages([]);
        }
    }, [query, setPackages]);

};

export default useGetPackageInfoSearchResult;
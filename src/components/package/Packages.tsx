import React from "react";
import { Table, TablePaginationConfig } from 'antd';
import useGetPackageInfoSearchResult from "../../hooks/useGetPackageInfoSearchResult";
import { usePackageInfo } from "../../contexts/PackageContext";
import SearchPackage from "../SearchPackage/SearchPackage";
import { COLUMNS, PAGINATION_CONFIGS } from "./constants";
import { useLoadingContext } from "../../contexts/LoadingContext";
import Loader from "../Loader/Loader";

const Packages = () => {
    const [search] = React.useState('');
    const { loading } = useLoadingContext();

    useGetPackageInfoSearchResult(search);
    const { packages } = usePackageInfo();

    return (
        <>
            <SearchPackage />
            {loading ? (
                <Loader tip="Loading content, please wait" data-testid="loader" />
            ) : (
                <Table
                    data-testid="table"
                    dataSource={packages}
                    columns={COLUMNS}
                    rowKey="name"
                    pagination={PAGINATION_CONFIGS as TablePaginationConfig}
                />
            )}
        </>
    );
};

export default Packages;
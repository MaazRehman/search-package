import {MenuProps} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import React from "react";

export const DEBOUNCE_DELAY = 300;
export const PLACEHOLDER_SEARCH_TEXT = "input search text";


export const HEADER_STYLES = {
    padding: 0,
    background:  "#ffcc2f",
    textAlign: "center",
}

export const SIDEBAR_STYLES = { backgroundColor: "#2188b6" }

export const FOOTER_STYLES = {
    textAlign: "center",
    height: "100px",
    lineHeight: "100px",
    marginBottom: "0",
}

export const MENU_ITEMS: MenuProps['items'] = [
    SearchOutlined
].map((icon, index) => ({
    key: String(index ),
    icon: React.createElement(icon),
    label: `Search Package`,
}));
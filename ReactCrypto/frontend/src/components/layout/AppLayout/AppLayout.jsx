import AppHeader from "../AppHeader/AppHeader.jsx";
import {Layout, Spin} from "antd";
import AppSider from "../AppSider/AppSider.jsx";
import AppContent from "../AppContent/AppContent.jsx";
import React, {useContext} from "react";
import CryptoContext from "../../../context/cryptoContext.jsx";

export default function AppLayout() {
    const {loading} = useContext(CryptoContext)

    if (loading) {
        return <Spin fullscreen />
    }

    return (
        <Layout>
            <AppHeader/>
            <Layout>
                <AppSider/>
                <Layout>
                    <AppContent/>
                </Layout>
            </Layout>
        </Layout>
    )
}
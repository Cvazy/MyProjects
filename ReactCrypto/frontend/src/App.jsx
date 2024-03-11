import React from 'react';
import { Layout } from 'antd';
import {CryptoContextProvider} from "./context/cryptoContext.jsx";
import AppLayout from "./components/layout/AppLayout/AppLayout.jsx";

const App = () => {
    return (
        <CryptoContextProvider>
            <AppLayout/>
        </CryptoContextProvider>
    );
};
export default App;
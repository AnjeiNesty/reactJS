import React from "react";
import {hot} from 'react-hot-loader/root';
import '../main.global.less'
import Layout from "./Layout/Layout";
import Header from "./Header/Header";
import Content from "./Content/Content";
import CardList from "./Content/CardList/CardList";


function AppComponent() {
    return (
        <Layout>
            <Header/>
            <Content>
                <CardList/>
            </Content>
        </Layout>
    )
}

export const App = hot(AppComponent);
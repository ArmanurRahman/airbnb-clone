import React from "react";
import Header from "../../Container/Header/Header";
import Banner from "../../component/Banner/Banner";
import Card from "../../component/Cards/Cards";

const Layout = () => {
    return (
        <React.Fragment>
            <Header />;
            <Banner />
            <Card />
        </React.Fragment>
    );
};

export default Layout;

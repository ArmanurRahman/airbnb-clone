import React, { useState } from "react";
import classes from "./Banner.module.css";
import { Button } from "@material-ui/core";
import Search from "../Search/Search";

const Banner = (props) => {
    const [searchButtonLabel, setSearchButtonLabel] = useState("Search Date");
    const [showDatePicker, setShowDatePicker] = useState(false);
    const searchDateHandler = () => {
        const label =
            searchButtonLabel === "Search Date" ? "Hide" : "Search Date";
        setSearchButtonLabel(label);
        setShowDatePicker(!showDatePicker);
    };
    return (
        <div className={classes.Banner}>
            <div className={classes.SearchDate}>
                <Button
                    className={classes.SearchButton}
                    variant='outlined'
                    onClick={searchDateHandler}
                >
                    {searchButtonLabel}
                </Button>

                {showDatePicker ? <Search /> : null}
            </div>
            <div className={classes.BannerInfo}>
                <h1>Get out of stretch your imagination</h1>
                <h5>
                    Plan a different kind of gateway to uncover the hidden gems
                    near you
                </h5>
                <Button variant='outlined'> Explore Nearby</Button>
            </div>
        </div>
    );
};

export default Banner;

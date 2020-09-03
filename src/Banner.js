import React from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';

function Banner() {
  return (
    <div className="banner">
      <div className="banner__search">
        <Button variant="outlined" className="banner__searchButton">
          Search Dates
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>Plan your getaway now</h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;

import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=480"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=480"
          title="Unique Stay"
          description="Spaces that are more than just a place to sleep"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=480"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/monet/Select-40039315/original/345b7d08-9e05-4e26-9e4d-3113efe0a718?aki_policy=large"
          title="Peaceful Paradise"
          description="Unique activities we can do together, led by a world of hosts"
          price="$158 / night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/0d87e5a8-3c92-41a6-82ef-e8aefebbafd5.jpg?aki_policy=large"
          title="The Tiny House"
          description="Spaces that are more than just a place to sleep"
          price="$142 / night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/549d3692-8aef-49a7-a57d-c6cbcf27c705.jpg?aki_policy=large"
          title="Spacious Family Home"
          description="Comfortable private places, with room for friends or family"
          price="$271 / night"
        />
      </div>
    </div>
  );
}

export default Home;

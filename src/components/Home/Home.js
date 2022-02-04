import { HomeSection, HomeTitle } from "./HomeStyle";

const Home = () => {
  return (
    <HomeSection>
      <HomeTitle>
        <h1 className="white">Perfect Workout</h1>
        <h1 className="black">For Your Body</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
          adipisci! Atque, nam quo. Non, dolore. Id sit sequi suscipit odit
          veritatis quo impedit numquam ab!
        </p>
        <div className="btn btn-three">
          <span>Let"s go</span>
        </div>
      </HomeTitle>
    </HomeSection>
  );
};

export default Home;

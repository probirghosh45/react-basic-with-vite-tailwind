/* eslint-disable no-unused-vars */
import Banner from "./components/Banner";
import Card from "./components/Card";
import CardTwo from "./components/CardTwo";
import Core from "./components/Core";
import UserInfo from "./components/UserInfo";

const App = () => {
  // pros drilling
  const bannerTitle = "Sending Data Using Pros";

  const userData = {
    name: "Probir Ghosh",
    age: "30",
  };

  return (
    <>
      <div>
          {/* part-1 */}
        <p className="text-3xl font-bold underline bg-secondary mb-10">
          Hello React!
        </p>
        <Banner title={bannerTitle} userDetails={userData} />
        <UserInfo />
        <Core />
        <img className="pb-8" src="./images/react-js.png" alt="react js" />
        <button className="btn btn-primary">Click Me</button>
      </div>
      {/* use a theme specific section only*/}
      {/* <div data-theme="light">
        This div will always use light theme
        <span data-theme="retro">This span will always use retro theme!</span>
      </div> */}

      {/* part-2 */}
      {/* Pros Drilling Bad Practice */}
      <Card />
      {/* Pros Drilling Good Practice */}
      <CardTwo/>
    </>
  );
};

export default App;

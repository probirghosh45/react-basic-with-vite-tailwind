/* eslint-disable react/no-unescaped-entities */
const Core = () => {
  const userData = {
    name: "Probir Ghosh",
    age: "30",
  };

  return (
    <div className=" py-10 ">
      <p >JavaScript in JSX</p>
      <h3>User's name : {userData.name}</h3>
      <h4>User's age : {parseInt(userData.age) + 20}</h4>
      <h4>40+5 = {40+5}</h4>
    </div>
  );
};

export default Core;

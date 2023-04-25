import CardDetailsTwo from "./CardDetailsTwo";

const CardTwo = () => {
  const players = [
    {
      name: "Shakib Al Hasan",
      role: "Batter",
      type: "Left Hand",
      country: "Bangladesh",
      displayPhoto: "https://i.ibb.co/fD5Ynk0/shakib.webp",
    },
    {
      name: "Ashish Nehra",
      role: "Baller",
      type: "Left Hand",
      country: "India",
      displayPhoto: "https://i.ibb.co/1TRTMw0/Ashish-Nehra.webp",
    },
    {
      name: "Sachin Tendulker",
      role: "Batter",
      type: "Right Hand",
      country: "India",
      displayPhoto: "https://i.ibb.co/MCzP6tn/sachin.jpg",
    },
    {
      name: "Mashrafe Mortaza",
      role: "Baller",
      type: "Right Hand",
      country: "Bangladesh",
      displayPhoto: "https://i.ibb.co/jTGcXCB/Mashrafe-Mortaza.jpg",
    },
  ];

  const bdPlayers = ["Liton", "Tamim", "Shakib", "M. Rahim", "Taskin"];
  // console.log(bdPlayers);

  // const playersArr = players.map((player) => player.name);
  const playersArr = players.map((player) => <p>{player}</p> );
  console.log(playersArr);

  return (
    <>
      <h1 className="text-7xl pt-7 text-center ">
        Pros Drilling Good Practice
      </h1>
      <div className=" grid grid-cols-4 gap-1 pt-10 pb-20 px-5 "></div>
      <CardDetailsTwo />
    </>
  );
};

export default CardTwo;

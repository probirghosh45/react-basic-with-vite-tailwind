import CardDetailsTwo from "./CardDetailsTwo";

const CardTwo = () => {
  const players = [
    {
      "id" : "1",
      name: "Shakib Al Hasan",
      role: "Batter",
      type: "Left Hand",
      country: "Bangladesh",
      displayPhoto: "https://i.ibb.co/fD5Ynk0/shakib.webp",
    },
    {
      "id" : "2",
      name: "Ashish Nehra",
      role: "Baller",
      type: "Left Hand",
      country: "India",
      displayPhoto: "https://i.ibb.co/1TRTMw0/Ashish-Nehra.webp",
    },
    {
      "id" : "3",
      name: "Sachin Tendulker",
      role: "Batter",
      type: "Right Hand",
      country: "India",
      displayPhoto: "https://i.ibb.co/MCzP6tn/sachin.jpg",
    },
    {
      "id" : "4",
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
  // const playersArr = players.map((player) => <p>{player}</p> );
  // const playersArr = players.map((player) => <p>{player.name}</p> );
  // console.log(playersArr);

  return (
    <>
      <h1 className="text-7xl pt-7 text-center ">
        Pros Drilling Good Practice
      </h1>
      <div className=" grid grid-cols-4 gap-1 pt-10 pb-20 px-5 ">
        {/* {
          players.map((player) => <p>{player.name}</p> )
        } */}
        {players.map((player) => (
          <div>
            <p>{player.name}</p>
            <p>{player.role}</p>
            <p>{player.country}</p>
          </div>
        ))}

      </div>
      <div div className=" grid grid-cols-4 gap-1 pt-10 pb-20 px-5 ">
       {/* {players.map((player) =>  <CardDetailsTwo key={player.name} {...player} /> */}
      {players.map((player,id) =>  <CardDetailsTwo key={id} {...player} />
)}
      </div>
    </>
  );
};

export default CardTwo;

/* eslint-disable no-unused-vars */
import CardDetails from "./CardDetails";

const Card = () => {

    const player1 ={
        name: "Shakib Al Hasan",
        role:"Batter",
        type : "Left Hand",
        country:"Bangladesh",
        displayPhoto : "https://i.ibb.co/fD5Ynk0/shakib.webp"
    }
    const player2 ={
        name: "Ashish Nehra",
        role:"Baller",
        type : "Left Hand",
        country:"India",
        displayPhoto : "https://i.ibb.co/1TRTMw0/Ashish-Nehra.webp"
    }
    const player3 ={
        name: "Sachin Tendulker",
        role:"Batter",
        type : "Right Hand",
        country:"India",
        displayPhoto : "https://i.ibb.co/MCzP6tn/sachin.jpg"
    }
    const player4 ={
        name: "Mashrafe Mortaza",
        role:"Baller",
        type : "Right Hand",
        country : "Bangladesh",
        displayPhoto : "https://i.ibb.co/jTGcXCB/Mashrafe-Mortaza.jpg"
    }

    return (
        <>
        <h1 className="text-7xl pt-7 text-center ">Pros Drilling Bad Practice</h1>
        <div className=" grid grid-cols-4 gap-1 pt-10 pb-20 px-5 ">
            {/* <CardDetails playerOne={player1} /> */}
            <CardDetails name={player4.name} role={player4.role} type={player4.type} displayPhoto={player4.displayPhoto} country={player4.country}/>
            <CardDetails name={player2.name} role={player2.role} type={player2.type} displayPhoto={player2.displayPhoto}  country={player2.country}/>
            <CardDetails name={player1.name} role={player1.role} type={player1.type} displayPhoto={player1.displayPhoto}  country={player1.country}/>
            <CardDetails name={player3.name} role={player3.role} type={player3.type} displayPhoto={player3.displayPhoto}  country={player3.country}/>
        </div>

        </>
    );
};

export default Card;
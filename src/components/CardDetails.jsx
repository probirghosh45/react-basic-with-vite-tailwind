/* eslint-disable no-unused-vars */

const CardDetails = (pros) => {
    // console.log(pros.playerOne);
    // const {name , role, type , displayPhoto} = pros.playerOne; // destructing object from props object,since props receive data as an object;
    // console.log(pros);
    const {name , role, type , displayPhoto , country} = pros;
    // console.log(displayPhoto);
    return (
        <div>
            <img className="h-3/4 w-80 " src={displayPhoto} alt="" />
            <h1 className="text-3xl">{name}</h1>
            <h1 className="text-2xl">{role}</h1>
            <h1 className="text-xl">{type}</h1>
            <h1 className="text-lg">{country}</h1>
        </div>
    );
}
export default CardDetails;
const CardDetailsTwo = ({name , role, type , displayPhoto , country}) => {
// console.log(pros);
// const {name , role, type , displayPhoto , country} = props.playerData;
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
export default CardDetailsTwo;
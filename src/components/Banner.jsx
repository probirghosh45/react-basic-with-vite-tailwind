const Banner = (propsData) => {
    // console.log(propsData); // we can use any name here , receiving data as object


    const {name,age} = propsData.userDetails;
    
  return (
    <div>
      <h1>Welcome to Web Development World!</h1>
      <h1>{propsData.title}</h1>
      <h2>{name} age is {parseInt(age) + 20}</h2>
    </div>
  );
};

export default Banner;

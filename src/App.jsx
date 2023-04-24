const App = () => {
  return ( 
    <>
      <div>
        <p className="text-3xl font-bold underline bg-secondary">
          Hello React!
        </p>
        <button className="btn btn-primary">Click Me</button>
      </div>
      {/* use a theme specific section only*/}
      {/* <div data-theme="light">
        This div will always use light theme
        <span data-theme="retro">This span will always use retro theme!</span>
      </div> */}
    </>
  );
};

export default App;

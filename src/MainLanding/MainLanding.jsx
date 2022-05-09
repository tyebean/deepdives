import MainNav from '../MainNav/MainNav.jsx'

const MainLanding = () => {
  const sayHello = "Hello"
  return ( 
    <>
    <MainNav />
    <h1>This is Landing</h1>
    {sayHello + " friend!"}
    <p>I'm here to practice all of the new skills I'm learning.</p>
    </>
  );
}

export default MainLanding;
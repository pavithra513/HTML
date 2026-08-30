import Home from './Home';
import NavBar from './NavBar';
import './index.css';
import Counter from './Counter';

import Name from './Name';
import Update from './Update';
import LoginPage from './LoginPage';
import Demo from './Demo.jsx'



function App() {
  let info = {
    name: "pavi",
    age: "21"
    
  };
  return (
    <>
      <NavBar />
      <Home name={"Pavi"} age={"23"} />
     
      
      <Name />
      <LoginPage/><br/><br/>
      <Update />
      <Counter/>
      <Demo/>

    </>);
}


export default App;
import { useState } from "react";
import Form from "./components/Form";
import Team from "./components/Team"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  const listGender = [
    {
      name:'RPG',
      firstColor:'#f4b4a1',
      secondColor:'#c0c0c0',
    },
    {
      name:'FPS',
      firstColor:'#ffe042',
      secondColor:'#c0c0c0',
    },
    {
      name:'MOBA',
      firstColor:'#0e387a',
      secondColor:'#c0c0c0',
    }
  ]

  const [games,setGames] = useState([])

  const aNewGameAdd = (game) =>{
    console.log(game)
    setGames([...games, game])
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Form listGender ={listGender.map(gender => gender.name)}  aRegisteredGame={game => aNewGameAdd(game)}/>
        {listGender.map(gender=> <Team 
        key={gender.name} 
        name={gender.name} 
        firstColor={gender.firstColor} 
        secondColor={gender.secondColor}
        games={games.filter(game => game.gender === gender.name)}
        />)}
        <Footer/>
      </header>
    </div>
  );
}

export default App;

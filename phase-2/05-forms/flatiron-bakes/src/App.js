import {useState} from 'react'
import Header from "./components/Header"
import CakeCard from "./components/CakeCard";
import SearchBar from "./components/SearchBar";
import CakeForm  from './components/CakeForm';
import cakes from './data';


function App() {
  const [visible, setVisible] = useState(false)
  const [selectedCake, setSelectedCake] = useState(null)
  const [cakeList, setCakes] = useState(cakes)

  function handleAddCake(cake){
    setCakes([
      ...cakeList, cake
    ])

  }
  return (
    <>
      <Header />
      <CakeForm handleAddCake={handleAddCake}/>
      {visible?<SearchBar />:null}
      <br/>
      {selectedCake?<CakeDetail cake={selectedCake}/>:null}
      <button onClick={() => setVisible(!visible)}>{visible?'x':'Load Search Bar'}</button>
      {cakeList.map(cake => <CakeCard cake={cake} setSelectedCake={setSelectedCake}/>)}
    </>
  );
}

export default App;

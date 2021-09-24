import {useState} from 'react'
import Header from "./components/Header"
import CakeCard from "./components/CakeCard";
import CakeDetail from './components/CakeDetail';
import SearchBar from "./components/SearchBar";
import cakes from './data';

function App() {
  const [visible, setVisible] = useState(false)
  const [selectedCake, setSelectedCake] = useState(null)
  return (
    <>
      <Header />
      {visible?<SearchBar />:null}
      <button onClick={() => setVisible(!visible)}>{visible?'x':'Form'}</button>
      <br/>
      
      {/* if cake exists render cake */}
      {selectedCake?<CakeDetail cake={selectedCake}/>:null}

      {cakes.map(cake => <CakeCard cake={cake} setSelectedCake={setSelectedCake}/>)}
    </>
  );
}

export default App;

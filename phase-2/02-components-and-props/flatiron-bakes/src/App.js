import CakeCard from "./CakeCard";
import cakes from "./data"
function App() {
  return (
    <>
     {cakes.map(c => <CakeCard flavor={c.flavor} price={c.price} size={c.size}/>)}
    </>
  );
}

export default App;

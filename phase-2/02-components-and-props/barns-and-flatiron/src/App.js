
//Header
//Form
//Filter
//Book Container
import './App.css'
import BookContainer from './components/BookContainer';
import Header from './components/Header'
import books from './data'
function App() {
  console.log(books)
  return (
    <>
      <Header storeName={"Barns and Flatiron"}/>
      <BookContainer books={books} />
    </>
  );
}

export default App;




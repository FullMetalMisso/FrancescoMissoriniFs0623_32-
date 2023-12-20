import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BasicExample from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import SingleBook from './components/SingleBook';
import BookList from './components/BookList';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
       <BasicExample />
       <Welcome />
      </header>
      <SingleBook  asin= "0316438960"
			title= "The Last Wish: Introducing the Witcher"
			img= "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg"
			price= "9.59"
			category= "fantasy"/> 
      <BookList />
      < AllTheBooks />
      <SingleBook />
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;

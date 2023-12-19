import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BasicExample from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BasicExample />
       <Welcome />
      </header>
      < AllTheBooks />
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;

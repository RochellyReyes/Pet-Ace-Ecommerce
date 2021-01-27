import './App.css';
import Routes from "./Components/Routes/Routes";
//https://www.npmjs.com/package/concurrently

// import global styles
import "./styling/nav.css";
import './styling/footer.css';

function App() {
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;

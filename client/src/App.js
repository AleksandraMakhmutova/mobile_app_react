
import './App.css';
import MainPage from './Components/MainPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import InfoPage from './Components/InfoPage';


function App() {
  return (
    <BrowserRouter>
			<Switch>
				<Route exact path="/" component={MainPage}/>
				<Route exact path="/info/:id" component={InfoPage}/>
			</Switch>
		</BrowserRouter>
  );
}

export default App;

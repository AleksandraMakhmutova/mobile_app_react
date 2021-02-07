
import './App.css';
import MainPage from './Components/MainPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import InfoPage from './Components/InfoPage';

function App() {
  return (
	
    <BrowserRouter>
			<Switch>
<Route exact path="/info/:id" component={InfoPage}/>
				<Route path="/" component={MainPage}/>
			
			</Switch>
		</BrowserRouter>
  );
}

export default App;

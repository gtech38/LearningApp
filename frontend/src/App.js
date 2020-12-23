import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Decks from './pages/Decks'
import Notes from './pages/Notes';
import Flashcards from './pages/Flashcards';
import Todos from './pages/Todos';
import './App.css';

function App() {
	return (
		<>
			<Router>
				<Sidebar />
				<Switch>
					<Route path='/' exact component={Dashboard} />
					<Route path='/decks' component={Decks}/>
					<Route path='/flashcards' component={Flashcards}/>
					<Route path='/notes' component={Notes}/>
					<Route path='/todos' component={Todos}/>
				</Switch>
			</Router>
		</>
	);
}

export default App;
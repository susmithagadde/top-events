import { Provider } from 'react-redux';
import { Router, Route, Switch } from "react-router-dom";
import { store } from './store';
import './App.css';
import { history } from './History';
import TopEvents from "./components/TopEvents/TopEvents";
import EventInfo from "./components/EventInfo/EventInfo";


function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route path="/" exact>
                  <TopEvents />
            </Route>
              <Route path="/event/:id" render={(props) => <EventInfo {...props} /> } />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;


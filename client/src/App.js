import { Main } from './pages';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path='/' exact={true} component={Main} />
    </Switch>
  );
}

export default App;

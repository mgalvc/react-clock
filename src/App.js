import { format } from 'date-fns'
import Clock from './Clock'
import './css/App.css'

function App() {
  return (
    <div className='App'>
      <h1>Today is {format(new Date(), 'MM/dd/yyyy')}</h1>
      <p>{Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
      <Clock />
    </div>
  );
}

export default App;

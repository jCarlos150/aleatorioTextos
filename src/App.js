import './App.css';
import Box from './box';
import { useSelector } from 'react-redux';

function App() {
  const color = useSelector(state => state.color.value)
  return (
    <div className={"container"} style={{backgroundColor: color}}>
       <Box/>
    </div>
  );
}

export default App;

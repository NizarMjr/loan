import { useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { set_data } from './redux/Actions';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('./products.json').then(res => dispatch(set_data(res.data))).catch(err => console.log(err.message));
  }, [])

  return (
    <div className="flex justify-center items-center flex-col rounded bg-desktop">
      <h3 className='font-400 font-title-font sm:w-text-sm sm:w-title-destop w-title-mobile sm:h-title-desktop h-title-mobile mt-[6rem] pl-4 text-center text-title'>Let's plan your <span className='font-bold'>loan</span></h3>
      <Card />
    </div>
  );
}

export default App;

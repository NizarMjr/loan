import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="flex justify-center items-center flex-col rounded bg-desktop">
      <h3 className='font-400 font-title-font sm:w-text-sm sm:w-title-destop w-title-mobile sm:h-title-desktop h-title-mobile mt-[6rem] pl-4 text-center text-title'>Let's plan your <span className='font-bold'>loan</span></h3>
      <Card />
    </div>
  );
}

export default App;

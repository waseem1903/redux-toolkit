import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
  return (<>
    <div className="container">
      <h1 className='text-center my-4'>Redux Toolkit Assignment</h1>
      <div className="row gx-5">
        <ComponentA />
        <ComponentB />
      </div>
    </div>
  </>);
}

export default App;

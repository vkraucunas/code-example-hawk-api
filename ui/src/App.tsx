import React from 'react';
import './App.css';
import HawkTable from './components/HawkTable';
import AddHawkForm from './components/AddHawkForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1>Hawk Collection</h1>
        <button>Add Hawk</button>
      </header>
      <main>
        <HawkTable />
        <AddHawkForm />
      </main>
    </div>
  );
};

export default App;

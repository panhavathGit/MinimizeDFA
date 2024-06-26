// src/App.jsx
import React, { useState } from 'react';
import DFAInput from './components/DFAInput';
import DFADisplay from './components/DFADisplay';
import DFAMinimizer from './components/DFAMinimizer';
import './App.css';

const MinimizeAPP = () => {
  const [dfa, setDfa] = useState(null);

  const handleDfaSubmit = (submittedDfa) => {
    setDfa(submittedDfa);
  };

  return (
    <div className="App">
      <h1>DFA Minimizer</h1>
      <DFAInput onSubmit={handleDfaSubmit} />
      {dfa && <DFADisplay dfa={dfa} />}
      {dfa && <DFAMinimizer dfa={dfa} />}
    </div>
  );
};

export default MinimizeAPP;

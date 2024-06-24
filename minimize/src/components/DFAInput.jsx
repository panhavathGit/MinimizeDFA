// src/components/DFAInput.jsx
import React, { useState } from 'react';

const DFAInput = ({ onSubmit }) => {
  const [states, setStates] = useState('');
  const [alphabet, setAlphabet] = useState('');
  const [transitions, setTransitions] = useState('');
  const [startState, setStartState] = useState('');
  const [finalStates, setFinalStates] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const dfa = {
      states: states.split(',').map(s => s.trim()),
      alphabet: alphabet.split(',').map(s => s.trim()),
      transitions: transitions.split('\n').map((transition) => {
        const [from, symbol, to] = transition.split(',').map(s => s.trim());
        return { from, symbol, to };
      }),
      startState: startState.trim(),
      finalStates: finalStates.split(',').map(s => s.trim())
    };
    onSubmit(dfa);
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className="info">

          <label>
            States (comma-separated):
            <input type="text" value={states} onChange={(e) => setStates(e.target.value)} />
          </label>
          <br />
          <label>
            Alphabet (comma-separated):
            <input type="text" value={alphabet} onChange={(e) => setAlphabet(e.target.value)} />
          </label>
          <br />
          <label>
            Transitions (one per line, format: from,symbol,to):
            <textarea value={transitions} onChange={(e) => setTransitions(e.target.value)} />
          </label>
          <br />
          <label>
            Start State:
            <input type="text" value={startState} onChange={(e) => setStartState(e.target.value)} />
          </label>
          <br />
          <label>
            Final States (comma-separated):
            <input type="text" value={finalStates} onChange={(e) => setFinalStates(e.target.value)} />
          </label>
          <br />
      </div>
      <button type="submit">Submit DFA</button>
    </form>
  );
};

export default DFAInput;

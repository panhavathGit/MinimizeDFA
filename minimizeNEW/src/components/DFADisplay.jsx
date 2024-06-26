// src/components/DFADisplay.jsx
import React from 'react';
import { Graphviz } from 'graphviz-react';
import { generateDfaDotString } from '../utils/graphviz';

const DFADisplay = ({ dfa }) => {
  if (!dfa) return null;

  const dotString = generateDfaDotString(dfa);

  return (
    <div>
      <h3>DFA Details</h3>
      <p><strong>States:</strong> {dfa.states.join(', ')}</p>
      <p><strong>Alphabet:</strong> {dfa.alphabet.join(', ')}</p>
      <p><strong>Transitions:</strong></p>
      <ul>
        {dfa.transitions.map((t, index) => (
          <li key={index}>{`${t.from}, ${t.symbol}, ${t.to}`}</li>
        ))}
      </ul>
      <p><strong>Start State:</strong> {dfa.startState}</p>
      <p><strong>Final States:</strong> {dfa.finalStates.join(', ')}</p>
      <Graphviz dot={dotString} />
    </div>
  );
};

export default DFADisplay;


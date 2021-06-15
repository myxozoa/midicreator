import React, { useEffect } from 'react';
import { Editor } from './components/Editor';
import { KeyPress } from './utils';

function App() {
  useEffect(() => {
    KeyPress.init();
  }, []);

  return (
    <div className="App">
      <Editor />
    </div>
  );
}

export default App;

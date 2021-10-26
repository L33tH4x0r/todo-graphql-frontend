import React, { useState } from 'react';
import '../style/App.css';
import {AuthUser} from '../graphql/mutations/login'

const App = () => {
  const [currentUser] = useState<AuthUser | null>(null)
  return (
    <div className="App">
      <header className="App-header">
        {currentUser?.lists.tasks.id}
      </header>
    </div>
  );
}

export default App;

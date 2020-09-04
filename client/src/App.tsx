import React from 'react';

import Main from './pages/Main/Index';

import GlobalStyles from './assets/GlobalStyles';

function App() {
  
  console.log(window.matchMedia('(prefers-color-scheme: dark)'))

  return (
    <>
      <Main />
      <GlobalStyles />
    </>
  );
}

export default App;

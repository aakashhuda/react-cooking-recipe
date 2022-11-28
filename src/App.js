import './App.css';
import React, { useState } from 'react'
import Counter from './Counter'
import Title from './Title'
import CounterHook from './CounterHook';
import Footer from './Footer';

export const ThemeContext = React.createContext()

function App() {

  const [theme, setTheme] = useState('skyblue')

  return (
    <ThemeContext.Provider value={{
      backgroundColor: theme
    }}>
      <Title initialTitle='Counter Changed'/>
      <Counter initialValue={6} />
      <Title initialTitle="Counter Hook" />
      <CounterHook initialValue={0} />
      <button onClick = { ()=> setTheme(prevTheme=>{
        return prevTheme === 'skyblue' ? 'cyan' : 'skyblue'
      }) }>Toggle</button>
      <Footer footerText = "This is the footer" titleText = "Another title text" />
    </ThemeContext.Provider>
  );
}

export default App;

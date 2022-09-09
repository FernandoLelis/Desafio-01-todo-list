import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

import './global.css';

import styles from './App.module.css';


function App() {

  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        
        <Tasks />
         
      </div>
    </>
  )
}

export default App

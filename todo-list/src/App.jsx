import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

import './global.css';

import styles from './App.module.css';

function App() {

  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <NewTask />
        <main>
        <h1>Hello World!</h1>
        </main>
      </div>
    </>
  )
}

export default App

import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Tasks } from './components/Tasks';

import './global.css';

import styles from './App.module.css';

const tasks = [
  {
    id: 1,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    check: false,
  }
]

function App() {

  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <NewTask />
        
        <Tasks />
      </div>
    </>
  )
}

export default App

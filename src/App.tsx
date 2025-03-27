import TodoList from './components/TodoList';
import Header from './components/Header';

import './App.css'

function App() {


  return (
    <div className='max-w-[100vw] h-screen mx-auto'>
       <Header />
      <TodoList />
    </div>
  )
}

export default App

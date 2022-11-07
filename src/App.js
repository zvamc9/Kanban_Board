import './App.css';
import Header from './components/Header/header'; 
import Footer from './components/Footer/footer';
import Main from './components/Main/main';
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
//import data from './mock-data.json';
//import { LIST_TYPES, LIST_COPY } from './components/ConstData/constData'

function App() {
  let tasks = JSON.parse(window.localStorage.getItem('todo'))
  tasks = tasks ? tasks : []
  const [todo, setToDo] = useState(tasks)
  useEffect(() => {
    window.localStorage.setItem('todo', JSON.stringify(todo))
  })
  return (
    <div className="App">
      <BrowserRouter>
  <Header />
  <Main todo={todo} setToDo={setToDo}/>
        <Footer todo={todo}/>
  </BrowserRouter>
    </div>
  );
}

export default App;

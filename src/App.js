import './App.css';
import Header from "./inc/Header";
import Footer from "./inc/Footer";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
        <Header/>
        <TodoForm/>
        <TodoList/>
        <Footer/>
    </div>
  );
}

export default App;

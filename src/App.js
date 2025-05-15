import './App.css';
import NavBar from './components/NavBar';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="content-wrapper">
        <Article />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Vakacharla Lokesh - Personal Blog</p>
      </footer>
    </div>
  );
}

export default App;
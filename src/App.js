// import logo from './logo.svg';
import './App.css';
import {NavSection} from './Component/Header/NavSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MainBody} from './Component/Body/MainBody';
import {MainFooter} from './Component/FooterSection/MainFooter'
function App() {
  return (
    <div className="App">
      <NavSection />
      <MainBody />
      <MainFooter />
    </div>
  );
}

export default App;

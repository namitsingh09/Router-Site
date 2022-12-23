
import './App.css';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Caroussel from './Carousel';
import Caroussel2 from './Carousel2';
import Com from './Com';
import Members from './Members';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Caroussel></Caroussel>
      <Caroussel2></Caroussel2>
      <Com></Com>
      <Members></Members>
      <Footer></Footer>
     
   
    </div>
  );
}

export default App;


import './App.css';
import Content from './components/Content';
import Link from './components/Link';
import Social from './components/Social'
import Footer from './components/Footer'

function App() {
  return (
    <div className='contacts'>
    <Content/>
    <Link
    address="https://www.twitter.com/opeoluwaoyedeji"
    name="Twitter Link"
    />
    <Link
    address="https://training.zuri.team/"
    name="Zuri Team"
    />
    <Link
    address="http://books.zuri.team"
    name="Zuri Books"
    />
     <Link
    address="https://books.zuri.team/"
    name="Python Books"
    />
     <Link
    address="https://background.zuri.team/"
    name="Background Check for Coders"
    />
     <Link
    address="https://books.zuri.team/design-rules/"
    name="Design Books"
    />
    <Social/>
    <Footer/>




    </div>
    
  );
}

export default App;

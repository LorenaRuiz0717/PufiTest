
import { Provider } from 'react-redux';
import store from './store';
import { Nav } from './components/templates/Nav';
import {Banner} from './components/templates/Banner';
import SectionProduct from './components/templates/SectionProduct';
import GalleryInstagram from './components/templates/GalleryInstagram';
import {Newsletter} from './components/templates/Newsletter';
import Footer from './components/templates/Footer';

function App() {
  return (
    <Provider store={store}>
    <Nav/>
    <Banner/>
    <SectionProduct/>
    <GalleryInstagram/>
    <Newsletter/>
    <Footer/>
    </Provider>
  );
}

export default App;

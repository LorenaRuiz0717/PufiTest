
import { Provider } from 'react-redux';
import store from './store';
import { Nav } from './components/Nav';
import {Banner} from './components/Banner';
import Section from './components/Section';
import { GalleryInstagram } from './components/GalleryInstagram';
import {Newsletter} from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  return (
    <Provider store={store}>
    <Nav/>
    <Banner/>
    <Section/>
    <GalleryInstagram/>
    <Newsletter/>
    <Footer/>
    </Provider>
  );
}

export default App;

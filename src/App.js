import './App.css';
import NavBar from './Components/NavBar';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import MainHeader from './Components/MainHeader';
import HeroNews from './Components/HeroNews';
import TechNews from './Components/TechNews';
import SportsNews from './Components/SportsNews';
import TopHeadlines from './Components/TopHeadlines';
import Categories from './Components/Categories';
import Footer from './Components/Footer';
import AllNews from './Components/AllNews';
import SubHeader from './Components/SubHeader';
import SearchNews from './Components/SearchNews';
import SearchResults from './Components/SearchResults';
import Contact from './Components/Contact';
import Demo from './Components/Demo';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<> <NavBar selected="home"/> <SearchNews/> <MainHeader/>  <TopHeadlines/> <Categories/> <HeroNews/> <TechNews/> <SportsNews/> <Footer/> </>} />
        <Route path='/automobileNews' element={<><NavBar selected="automobiles"/> <SubHeader linkName="Automobile News" headerName="Automobile Industry"/> <AllNews news="Automobile"/> <Footer/> </>} />
        <Route path='/techNews' element={<> <NavBar  selected="techNews"/> <SubHeader linkName="Tech News" headerName="Tech Industry"/> <AllNews news="Technology"/> <Footer/> </>} />
        <Route path='/sportsNews' element={<> <NavBar  selected="sportsNews"/> <SubHeader linkName="Sports News" headerName="Sports"/> <AllNews news="Sports"/> <Footer/> </>} />
        <Route path='/searchResults' element={<> <NavBar selected="none"/> <SubHeader linkName="Search Results" headerName="News"/> <SearchResults/> <Footer/> </>} />
        <Route path='/contact' element={<> <NavBar selected="contact"/> <SubHeader linkName="Contact" headerName="Contact Us"/> <Contact/> <Footer/> </>} />
        <Route path='/demo' element={<> <NavBar selected="Demo"/> <SubHeader linkName="Demo" headerName="Demo"/> <Demo/> <Footer/> </>} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './Main';
import { About } from './About';
import { Works } from './Works';
import { Contact } from './Contact';
import { TermsCondtions } from './TermsConditions';
import { PrivacyPolicy } from './PrivacyPolicy';
import { ChangeLog } from './Utilities/ChangeLog';
import { Instructions } from './Utilities/Instructions';
import { Licenses } from './Utilities/Licenses';
import { StyleGuide } from './Utilities/StyleGuide';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='about' element={<About />} />
        <Route path='works' element={<Works />} />
        <Route path='contact' element={<Contact />} />
        <Route path='terms-conditions' element={<TermsCondtions />} />
        <Route path='privacy-policy' element={<PrivacyPolicy />} />
        <Route path='changelog' element={<ChangeLog />} />
        <Route path='instructions' element={<Instructions />} />
        <Route path='licenses' element={<Licenses />} />
        <Route path='style-guide' element={<StyleGuide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

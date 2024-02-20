import './App.css';
import AddressDetails from './Pages/AddressDetails';
import FaqsPage from './Pages/faqsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const faqs = [
    { question: 'Questions Questions Questions Questions Questions Questions Questions', answer: 'Answers Answers Answers Answers Answers Answers Answers Answers' },
    { question: 'Questions Questions Questions Questions Questions Questions Questions', answer: 'Answers Answers Answers Answers Answers Answers Answers Answers' },
    { question: 'Questions Questions Questions Questions Questions Questions Questions', answer: 'Answers Answers Answers Answers Answers Answers Answers Answers' },
    { question: 'Questions Questions Questions Questions Questions Questions Questions', answer: 'Answers Answers Answers Answers Answers Answers Answers Answers' }
  ];
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <AddressDetails/>
        } />
        <Route path='/faq' element={
          <FaqsPage faqs={faqs}/>
        } />
      </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;

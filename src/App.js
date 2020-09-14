import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: 'Projects',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
<Nav
  categories={categories}
  setCurrentCategory={setCurrentCategory}
  currentCategory={currentCategory}
  contactSelected={contactSelected}
  setContactSelected={setContactSelected}
></Nav>
      <main>
        <div>
{!contactSelected ? (
  <>
  <Gallery currentCategory = {currentCategory}></Gallery>
  <About></About>
  </>
) : (
  <ContactForm></ContactForm>
)}
        </div>
      </main>
    </div>
  );
}

export default App;
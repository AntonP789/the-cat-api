import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Cats from 'page/cats';
import SingleCat from 'page/single-cat';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cats />} />
        <Route path="/cat/:id" element={<SingleCat />} />
      </Routes>
    </div>
  );
}

export default App;

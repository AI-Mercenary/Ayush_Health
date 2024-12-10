import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Scheme1 from './Scheme1';
import Scheme2 from './Scheme2';
import Scheme3 from './Scheme3';
import Scheme4 from './Scheme4';

const SRouting = () => {
  return (
    <Routes>
      <Route path="scheme1" element={<Scheme1 />} />
      <Route path="scheme2" element={<Scheme2 />} />
      <Route path="scheme3" element={<Scheme3 />} />
      <Route path="scheme4" element={<Scheme4 />} />
    </Routes>
  );
};

export default SRouting;

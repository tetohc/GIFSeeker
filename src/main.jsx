import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifSeekerApp } from './GifSeekerApp';

import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifSeekerApp />
  </StrictMode>,
)

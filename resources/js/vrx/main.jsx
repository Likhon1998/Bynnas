import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/variables.css';
import './styles/global.css';
import './styles/sections.css';
import './styles/responsive.css';

const rootEl = document.getElementById('root');

try {
    createRoot(rootEl).render(<App />);
} catch (error) {
    rootEl.innerHTML = `<p class="boot">${String(error)}</p>`;
    console.error(error);
}

window.addEventListener('error', (event) => {
    if (!rootEl.querySelector('.vrx-page')) {
        rootEl.innerHTML = `<p class="boot">${event.message}</p>`;
    }
});

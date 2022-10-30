import * as React from 'react';
import {createRoot} from 'react-dom/client';
import './assets/style.scss';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);
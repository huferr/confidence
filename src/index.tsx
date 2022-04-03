import * as ReactDOMClient from 'react-dom/client';
import './styles/globalStyles.css';
import { App } from './App';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container as HTMLElement);

root.render(<App />);


import { Header, Main } from './components';
import { createRoot } from 'react-dom/client';

export function App() {
  const root = createRoot(document.getElementById('app'));
  root.render(
    <>
      <Header />
      <Main />
    </>
  );
}

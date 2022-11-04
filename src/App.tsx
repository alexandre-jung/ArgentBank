import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'store';
import Router from './Router';

function App () {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;

import store from 'store';
import { Provider } from 'react-redux';

type StoreProviderProps = {
  children: React.ReactNode;
}

export function StoreProvider ({ children }: StoreProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}

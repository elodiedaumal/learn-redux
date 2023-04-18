import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

import { useSelector } from 'react-redux';

function App() {
  const isAuthanticated = useSelector((state) => state.auth.isAuthanticated);

  return (
    <>
      <Header />
      {!isAuthanticated && <Auth />}
      {isAuthanticated && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;

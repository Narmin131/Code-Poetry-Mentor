import { WishlistProvider } from "react-use-wishlist";
import AppRouter from "./router/AppRouter";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
      window.scrollTo(0,0)
  }, [])
  return (
    <>
      <WishlistProvider>
        <AppRouter />
      </WishlistProvider>
    </>
  );
}

export default App;

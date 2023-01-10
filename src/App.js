import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DetailsItem from "./components/Jewelry/DetailsItem";
import Footer from "./components/Layout/Footer";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import JewelryPage from "./pages/JewlryPage";
import NotFoundPage from "./pages/NotFoundPage";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/home" exact>
          <HomePage />
        </Route>

        {authCtx.isLoggedIn && <Route path="/jewelry" exact>
          <JewelryPage />
        </Route>}

        {authCtx.isLoggedIn && <Route path="/jewelry/:jewelId">
          <DetailsItem />
        </Route>}

        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        
        <Route path="/profile">
          {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>

      <Footer />
    </Layout>
  );
}

export default App;

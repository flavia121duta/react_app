import { Route, Switch, Redirect } from "react-router-dom";
import Jewlry from "./pages/Jewelry";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import DetailsItem from "./components/Jewelry/DetailsItem";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  const DUMMY_PRODUCTS = [
    {
      id: "j1",
      category: "Bracelet",
      src: "https://www.pandora.net/assets/content?sku=592357C01&format=jpg&width=400&height=400&hash=E78E7BE1A3CBF51AEC299679EEFBCD9014E53120",
      price: 12.99,
    },
    {
      id: "j2",
      category: "Ring",
      src: "https://www.pandora.net/assets/content?sku=592357C01&format=jpg&width=400&height=400&hash=E78E7BE1A3CBF51AEC299679EEFBCD9014E53120",
      price: 10.99,
    },
    {
      id: "j3",
      category: "Talisman",
      src: "https://www.pandora.net/assets/content?sku=592357C01&format=jpg&width=400&height=400&hash=E78E7BE1A3CBF51AEC299679EEFBCD9014E53120",
      price: 13.99,
    },
    {
      id: "j4",
      category: "Necklace",
      src: "https://www.pandora.net/assets/content?sku=592357C01&format=jpg&width=400&height=400&hash=E78E7BE1A3CBF51AEC299679EEFBCD9014E53120",
      price: 11.99,
    },
    {
      id: "j5",
      category: "Bracelet",
      src: "https://www.pandora.net/assets/content?sku=592357C01&format=jpg&width=400&height=400&hash=E78E7BE1A3CBF51AEC299679EEFBCD9014E53120",
      price: 12.99,
    },
    {
      id: "j6",
      category: "Earring",
      src: "https://www.pandora.net/assets/content?sku=592357C01&format=jpg&width=400&height=400&hash=E78E7BE1A3CBF51AEC299679EEFBCD9014E53120",
      price: 14.99,
    },
    {
      id: "j7",
      category: "Bracelet",
      src: "https://www.pandora.net/assets/content?sku=592357C01&format=jpg&width=400&height=400&hash=E78E7BE1A3CBF51AEC299679EEFBCD9014E53120",
      price: 9.99,
    },
  ];

  let userIsRegistered = true;

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome" exact>
          <Welcome />
        </Route>
        <Route path="/jewelry" exact>
          <Jewlry list={DUMMY_PRODUCTS} />
        </Route>
        <Route path="/jewelry/:jewelId">
          <DetailsItem />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/login">
          <Login isRegistered={userIsRegistered} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

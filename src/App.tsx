import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import PiChart from "./components/pages/PiChart";
import LineChart from "./components/pages/LineChart";
import MapView from "./components/pages/MapView";
import NotFound from "./components/pages/NotFound";
import Layout from "./components/layout/Layout";

export const pages = [
  {
    label: "Pi-Chart",
    path: "/pi-chart",
    component: (
      <Layout>
        <PiChart />
      </Layout>
    ),
  },
  {
    label: "Line-Chart",
    path: "/line-chart",
    component: (
      <Layout>
        <LineChart />
      </Layout>
    ),
  },
  {
    label: "Map view",
    path: "/map-view",
    component: (
      <Layout>
        <MapView />
      </Layout>
    ),
  },
];

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={pages[0]?.path} replace />} />
          {pages.map((page) => (
            <Route path={page.path} element={page.component} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

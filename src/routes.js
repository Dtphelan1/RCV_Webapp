import SimulationPage from "./pages/SimulationPage";
import AboutPage from "./pages/AboutPage";

// Config file serving as a single point of truth for all application routes
const routes = [
  {
    path: `/about`,
    display: "About",
    component: AboutPage,
  },
  {
    path: `/`,
    display: "Home",
    component: SimulationPage,
  },
];

export { routes };

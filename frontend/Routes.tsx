import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import { GaragePage } from "./pages/garage/page";
import { LeaderboardPage } from "./pages/leaderboard/page";
import { ProfilePage } from "./pages/profile/page";
import Layout from "./layout";
import { ModulesPage } from "./pages/modules/page";
import { RookieModule } from "./pages/(modules)/rookie.tsx/page";
import { ChampionModule } from "./pages/(modules)/champion.tsx/page";
import { CompetitorModule } from "./pages/(modules)/competitor.tsx/page";
import { LegendModule } from "./pages/(modules)/legend.tsx/page";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/garage" element={<GaragePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/rookie" element={<RookieModule />} />
          <Route path="/champion" element={<ChampionModule />} />
          <Route path="/competitor" element={<CompetitorModule />} />
          <Route path="/legend" element={<LegendModule />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;

import { Outlet } from "react-router";
import { Header } from "../Header/Header";
import MainNavBar from "../NavBar/MainNavBar";
export function MainLayout() {
  return (
    <div className="mainWrap">
      <Header />

      <main style={{ padding: "10px" }}>
        <Outlet />
      </main>
      <footer>
        <MainNavBar />
      </footer>
    </div>
  );
}

import MainNavBar from "../NavBar/MainNavBar";
import { MainMenu } from "./MainManu";
import { UserInfo } from "./UserInfo";

export function Header() {
  return (
    <div className="mainNavWrapper">
      {/* <MainNavBar /> */}
      <hr />
      <MainMenu />
      <UserInfo />
    </div>
  );
}

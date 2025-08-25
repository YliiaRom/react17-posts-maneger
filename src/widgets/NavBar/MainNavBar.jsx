import { frontRoutes } from "@/shared/config/routes/frontRoutes.js";
import { NavLink } from "react-router";

function MainNavBar() {
  const pagesValues = Object.values(frontRoutes.pages);

  return (
    <>
      {pagesValues && (
        <ul className="mainNavBar">
          {pagesValues?.map(
            (el, index) =>
              el.meta.title !== "Not Found" &&
              el.meta.title !== "Forbidden" && (
                <li key={index}>
                  <NavLink
                    to={el ? el.navigationPath : ""}
                    className={({ isActive }) => (isActive ? "accentNav" : "")}
                  >
                    {el.meta.title}
                  </NavLink>
                </li>
              )
          )}
        </ul>
      )}
    </>
  );
}

export default MainNavBar;

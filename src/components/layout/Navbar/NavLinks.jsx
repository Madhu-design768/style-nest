import { NavLink } from "react-router-dom";
import { navigation } from "../../../data/navigation";

/**
 * NavLinks Component
 * Renders all desktop navigation links.
 */

const NavLinks = () => {
  return (
    <ul className="hidden lg:flex items-center gap-8">
      {navigation.map((item) => (
        <li key={item.id}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `font-medium transition-colors duration-200 ${
                isActive
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-primary)] hover:text-[var(--color-accent)]"
              }`
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
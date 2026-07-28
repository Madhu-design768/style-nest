import { NavLink } from "react-router-dom";
import { navigation } from "../../../data/navigation";

const NavLinks = () => {
  return (
    <ul className="hidden lg:flex items-center gap-8">
      {navigation.map((item) => (
        <li key={item.id}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `relative pb-1 text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
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
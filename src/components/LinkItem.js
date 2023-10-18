import { HiChevronDown } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function LinkItem({ linkName, emoji, to }) {
  return (
    <NavLink className="link" to={to}>
      <li>
        <span>{emoji}</span>
        <span>{linkName}</span>
        <span className="hide-icon">
          <HiChevronDown />
        </span>
      </li>
    </NavLink>
  );
}

export default LinkItem;

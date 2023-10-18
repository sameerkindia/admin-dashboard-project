import {
  HiChevronDown,
  HiCurrencyRupee,
  HiKey,
  HiOutlineCog,
  HiOutlineDocumentSearch,
  HiOutlineRss,
  HiOutlineUserCircle,
  HiShoppingBag,
} from "react-icons/hi";
import {
  HiMiniChevronDoubleLeft,
  HiMiniChevronDoubleRight,
} from "react-icons/hi2";
import LinkItem from "./LinkItem";
import { useEffect, useState } from "react";

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(windowWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`main-nav ${isOpen && "nav-open"}`}>
      <span onClick={() => setIsOpen(!isOpen)} className="side-btn">
        {isOpen ? <HiMiniChevronDoubleRight /> : <HiMiniChevronDoubleLeft />}
      </span>
      <div className="logo-box">
        <span>
          <HiOutlineCog />
        </span>
        DashBoard
      </div>
      <ul className="link-box">
        <LinkItem linkName="DashBoard" to="/dashboard" emoji={<HiKey />} />
        <LinkItem linkName="Product" to="/product" emoji={<HiShoppingBag />} />
        <LinkItem
          linkName="Customer"
          to="/customer"
          emoji={<HiOutlineUserCircle />}
        />
        <LinkItem linkName="Income" to="/income" emoji={<HiCurrencyRupee />} />
        <LinkItem linkName="Promote" to="/promote" emoji={<HiOutlineRss />} />
        <LinkItem
          linkName="Help"
          to="/help"
          emoji={<HiOutlineDocumentSearch />}
        />
      </ul>
      <div className="nav-user">
        <div className="nav-user-img"></div>
        <div className="nav-user-text">
          <p>Sameer</p>
          <span>Project Manager</span>
        </div>
        <div className="nav-user-icon">
          <HiChevronDown />
        </div>
      </div>
    </nav>
  );
}

export default MainNav;

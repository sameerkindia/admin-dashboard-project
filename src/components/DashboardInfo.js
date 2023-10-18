import {
  HiOutlineClipboardList,
  HiOutlineCreditCard,
  HiOutlineCurrencyRupee,
  HiOutlineShoppingBag,
} from "react-icons/hi";

import InfoBox from "./InfoBox";

function DashboardInfo() {
  return (
    <div className="dashboard-info">
      <InfoBox
        color={"green"}
        icon={<HiOutlineCurrencyRupee />}
        why={"Earning"}
        howMuch={"198"}
        groth={37.8}
        positive={true}
      />
      <InfoBox
        color={"purple"}
        icon={<HiOutlineClipboardList />}
        why={"Orders"}
        howMuch={"2.4"}
        groth={2}
        positive={false}
      />
      <InfoBox
        color={"blue"}
        icon={<HiOutlineCreditCard />}
        why={"Balance"}
        howMuch={"2.4"}
        groth={2}
        positive={false}
      />
      <InfoBox
        color={"pink"}
        icon={<HiOutlineShoppingBag />}
        why={"Sales"}
        howMuch={"8"}
        groth={11}
        positive={true}
      />
    </div>
  );
}

export default DashboardInfo;

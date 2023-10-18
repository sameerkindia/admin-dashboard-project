import { HiOutlineArrowSmDown, HiOutlineArrowSmUp } from "react-icons/hi";

function InfoBox({ color, icon, why, howMuch, groth, positive }) {
  return (
    <div className="info-box">
      <div className="info-box-inner">
        <div className={`info-emoji bg-${color}`}>{icon}</div>
        <div className="info-text">
          <p className="info-sub">{why}</p>
          <p className="info-main">{`$${howMuch}k`}</p>
          <p className="info-p">
            <span className={positive ? "positive" : "negative"}>
              {positive ? <HiOutlineArrowSmUp /> : <HiOutlineArrowSmDown />}{" "}
              {groth}%{" "}
            </span>
            this month
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;

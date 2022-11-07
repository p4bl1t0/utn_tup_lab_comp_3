import Title from "./Title";
import "./styles.css";

export default function Header({ pageTitle }) {
  return (
    <div className="capitalize-title">
      <Title title={pageTitle} />
    </div>
  );
}

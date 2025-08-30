import style from "./Dropdown.module.css";

export default function Dropdown() {
  return (
    <div className={style.dropdownBox}>
      <select>
        <option>Technology</option>
        <option>AI</option>
        <option>Gadgets</option>
        <option>All</option>
      </select>
    </div>
  );
}

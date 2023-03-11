import "./SuspendList.css";

const SuspendList = (props) => {
  console.log(props.itens);
  return (
    <div className="suspend-list">
      <label>{props.label}</label>
      <select>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default SuspendList;

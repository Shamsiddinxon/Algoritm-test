import SinglItems from "../../Hooks/selectedHook";

function SinglItem() {
  const [singlItem] = SinglItems();
  return <div className="singl">{console.log(singlItem)}</div>;
}

export default SinglItem;

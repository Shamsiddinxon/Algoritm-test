import SinglItems from "../../Hooks/selectedHook";

function SinglItem() {
  const [singlItem] = SinglItems();
  return (
    <div className="singls">
      <div className="singl wi">
        <img src={singlItem[0].displayAssets[0].full_background} alt="" />
      </div>
    </div>
  );
}

export default SinglItem;

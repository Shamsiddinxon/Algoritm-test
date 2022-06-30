import SinglItems from "../../Hooks/selectedHook";

function SinglItem() {
  const [singlItem] = SinglItems();
  return (
    <div className="singls w-11/12 mx-auto py-4 flex ">
      <div className="singl w-5/12 mr-5">
        <img src={singlItem[0].displayAssets[0].full_background} alt="" />
      </div>

      <div className="mt-10">
        <h3 className="main_item_title mt-3 ml-4">
          {singlItem[0].displayName}
        </h3>
        <p className="main_item_price mb-1 ml-4">
          $ {singlItem[0].price.finalPrice} USD
        </p>
        <p className="main_item_desc mb-1 ml-4">
          {singlItem[0].displayDescription}
        </p>
        <p className="main_item_data mb-1 ml-4">
          {singlItem[0].firstReleaseDate}
        </p>
      </div>
    </div>
  );
}

export default SinglItem;

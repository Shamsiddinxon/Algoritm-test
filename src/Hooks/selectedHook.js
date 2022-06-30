import { useContext } from "react";
import { Contextt } from "../Context/selectedContext";

const SelectedHook = () => {
  const karItem = useContext(Contextt);

  return [karItem.state, karItem.setState];
};

export default SelectedHook;

import { useContext } from "react";
import { Contextt } from "../Context/selectedContext";

const selectedHook = () => {
  const karItem = useContext(Contextt);

  return [karItem.state, karItem.setState];
};

export default selectedHook;

import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import SinglItem from "../../Hooks/selectedHook";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function Main() {
  let [option, setOption] = useState();
  let [menuDiv, setMenuDiv] = useState(false);
  const [singlItem, setSinglItem] = SinglItem();
  let [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  useEffect(() => {
    axios
      .get("https://fortniteapi.io/v2/shop?lang=en", {
        headers: {
          Authorization: "0c13c2aa-0a2cec03-b5455c56-766ae857",
        },
      })
      .then((res) => {
        setList(res.data.shop);
        window.localStorage.setItem("list", JSON.stringify(res.data.shop));
      });
  }, []);

  return (
    <div
      className="main w-11/12 mx-auto py-4"
      onKeyDown={(e) => setMenuDiv(false)}
    >
      <div className="relative">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            onKeyUp={(e) => {
              setMenuDiv(true);
              let inputValue = e.target.value;
              let inputlists = [];
              for (let rep of list) {
                if (
                  inputValue.toLowerCase() ===
                  rep.displayName.slice(0, inputValue.length).toLowerCase()
                ) {
                  console.log("Bo'ldiii");
                  if (inputlists.length < 7) {
                    inputlists.push(rep);
                  }
                }
              }

              setOption(inputlists);
              console.log(option);
            }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
        </Box>

        {menuDiv ? (
          <div className="menu absolute bg-white w-1/3 p-4">
            {option ? (
              option.map((i) => (
                <div>
                  <NavLink
                    onClick={(e) => {
                      let select = list.filter(
                        (i) => i.offerId === e.target.id
                      );
                      setSinglItem(select);
                      console.log(singlItem);
                    }}
                    id={i.offerId}
                    to="/about"
                  >
                    {i.displayName}
                  </NavLink>
                </div>
              ))
            ) : (
              <div>
                <p>none</p>
              </div>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="">
        {list ? (
          <div className="main_list flex justify-around">
            {list.map((item) => (
              <div className="main_item pb-4" key={item.offerId}>
                <img
                  className="main_item_img"
                  src={item.displayAssets[0].full_background}
                  alt=""
                />
                <h3 className="main_item_title mt-3 ml-4">
                  {item.displayName}
                </h3>
                <p className="main_item_price mb-1 ml-4">
                  $ {item.price.finalPrice} USD
                </p>
                <p className="main_item_desc mb-1 ml-4">
                  {item.displayDescription}
                </p>
                <p className="main_item_data mb-1 ml-4">
                  {item.firstReleaseDate}
                </p>
                <Button
                  onClick={(e) => {
                    let select = list.filter((i) => i.offerId === e.target.id);
                    setSinglItem(select);
                  }}
                  id={item.offerId}
                  variant="outlined"
                  className="p-0 mb-1 ml-4"
                >
                  <NavLink
                    onClick={(e) => {
                      let select = list.filter(
                        (i) => i.offerId === e.target.id
                      );
                      setSinglItem(select);
                      console.log(singlItem);
                    }}
                    id={item.offerId}
                    to="/about"
                    className="p-1"
                  >
                    Open
                  </NavLink>
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}

        {/* <div className="main_item pb-4">
          <img className="main_item_img" src={img} alt="" />
          <h3 className="main_item_title mt-3 ml-4">GALAXIAN</h3>
          <p className="main_item_price mb-1 ml-4">$ 300 USD</p>
          <p className="main_item_desc mb-1 ml-4">MISSION: DESTROY ALIENS.</p>
          <p className="main_item_data mb-1 ml-4">2022-06-30</p>
          <Button variant="outlined" className="p-0 mb-1 ml-4">
            <NavLink to="/login" className="p-2">
              Open
            </NavLink>
          </Button>
        </div>

        <div className="main_item pb-4">
          <img className="main_item_img" src={img} alt="" />
          <h3 className="main_item_title mt-3 ml-4">GALAXIAN</h3>
          <p className="main_item_price mb-1 ml-4">$ 300 USD</p>
          <p className="main_item_desc mb-1 ml-4">MISSION: DESTROY ALIENS.</p>
          <p className="main_item_data mb-1 ml-4">2022-06-30</p>
          <Button variant="outlined" className="p-0 mb-1 ml-4">
            <NavLink to="/login" className="p-2">
              Open
            </NavLink>
          </Button>
        </div>

        <div className="main_item pb-4">
          <img className="main_item_img" src={img} alt="" />
          <h3 className="main_item_title mt-3 ml-4">GALAXIAN</h3>
          <p className="main_item_price mb-1 ml-4">$ 300 USD</p>
          <p className="main_item_desc mb-1 ml-4">MISSION: DESTROY ALIENS.</p>
          <p className="main_item_data mb-1 ml-4">2022-06-30</p>
          <Button variant="outlined" className="p-0 mb-1 ml-4">
            <NavLink to="/login" className="p-2">
              Open
            </NavLink>
          </Button>
        </div>

        <div className="main_item pb-4">
          <img className="main_item_img" src={img} alt="" />
          <h3 className="main_item_title mt-3 ml-4">GALAXIAN</h3>
          <p className="main_item_price mb-1 ml-4">$ 300 USD</p>
          <p className="main_item_desc mb-1 ml-4">MISSION: DESTROY ALIENS.</p>
          <p className="main_item_data mb-1 ml-4">2022-06-30</p>
          <Button variant="outlined" className="p-0 mb-1 ml-4">
            <NavLink to="/login" className="p-2">
              Open
            </NavLink>
          </Button>
        </div>

        <div className="main_item pb-4">
          <img className="main_item_img" src={img} alt="" />
          <h3 className="main_item_title mt-3 ml-4">GALAXIAN</h3>
          <p className="main_item_price mb-1 ml-4">$ 300 USD</p>
          <p className="main_item_desc mb-1 ml-4">MISSION: DESTROY ALIENS.</p>
          <p className="main_item_data mb-1 ml-4">2022-06-30</p>
          <Button variant="outlined" className="p-0 mb-1 ml-4">
            <NavLink to="/login" className="p-2">
              Open
            </NavLink>
          </Button>
        </div> */}
      </div>
    </div>
  );
}

export default Main;

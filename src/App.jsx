import { useState } from "react";
import "./App.css";
import style from "./app.module.scss";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";
function App() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  function handleBurgerStatusChange() {
    setBurgerMenu(!burgerMenu);
  }
  return (
    <>
      <div className={style["wrapper"]}>
        <div
          className={`${style["wrapper-left"]} ${
            burgerMenu ? style["burgerOn"] : style["burgerOff"]
          }`}
        >
          <div className={style["left-menu"]}>
            <div className={style["logo"]}>
              <img
                className={style["logo__img"]}
                alt="logo"
                src="./assets/logo.png"
              />
              <h3 className={style["logo__version"]}>v.01</h3>
            </div>
            <div className={style["navigation"]}>
              <div className={style["navigation-item"]}>
                <img
                  className={style["navigation-item__icon"]}
                  alt="icon"
                  src="./assets/icons/key-square.png"
                />
                <h2 className={style["navigation-item__text"]}>Dashboard</h2>
              </div>
              <div className={style["navigation-item"]}>
                <img
                  className={style["navigation-item__icon"]}
                  alt="icon"
                  src="./assets/icons/3d-square 1.png"
                />
                <h2 className={style["navigation-item__text"]}>Product</h2>
                <img
                  className={style["navigation-item__arrow"]}
                  alt="icon"
                  src="./assets/icons/chevron-right 2.png"
                />
              </div>
              <div
                className={`${style["navigation-item"]} ${style["navigation-item-active"]}`}
              >
                <img
                  className={style["navigation-item__icon"]}
                  alt="icon"
                  src="./assets/icons/user-square 1.png"
                />
                <h2 className={style["navigation-item-active__text"]}>
                  Customers
                </h2>
                <img
                  className={style["navigation-item__arrow"]}
                  alt="icon"
                  src="./assets/icons/chevron-right 2w.png"
                />
              </div>
              <div className={style["navigation-item"]}>
                <img
                  className={style["navigation-item__icon"]}
                  alt="icon"
                  src="./assets/icons/wallet-money 2.png"
                />
                <h2 className={style["navigation-item__text"]}>Income</h2>
                <img
                  className={style["navigation-item__arrow"]}
                  alt="icon"
                  src="./assets/icons/chevron-right 2.png"
                />
              </div>
              <div className={style["navigation-item"]}>
                <img
                  className={style["navigation-item__icon"]}
                  alt="icon"
                  src="./assets/icons/discount-shape 1.png"
                />
                <h2 className={style["navigation-item__text"]}>Promote</h2>
                <img
                  className={style["navigation-item__arrow"]}
                  alt="icon"
                  src="./assets/icons/chevron-right 2.png"
                />
              </div>
              <div className={style["navigation-item"]}>
                <img
                  className={style["navigation-item__icon"]}
                  alt="icon"
                  src="./assets/icons/message-question 1.png"
                />
                <h2 className={style["navigation-item__text"]}>Help</h2>
                <img
                  className={style["navigation-item__arrow"]}
                  alt="icon"
                  src="./assets/icons/chevron-right 2.png"
                />
              </div>
            </div>
            <div className={style["projectManager"]}>
              <img
                alt="Evano"
                src="./assets/avatars/Pm.png"
                className={style["projectManager__logo"]}
              />
              <div className={style["projectManager-info"]}>
                <h3 className={style["projectManager-info__name"]}>Evano</h3>
                <h4 className={style["projectManager-info__job"]}>
                  Project Manager
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className={style["wrapper-right"]}>
          <h2 className={style["wrapper-right__welcome"]}>Hello Evano 👋🏼,</h2>
          <div className={style["allCustomers"]}>
            <div className={style["allCustomers-top"]}>
              <div className={style["allCustomers-top-textBlock"]}>
                <h3 className={style["textBlock__title"]}>All Customers</h3>
                <h3 className={style["textBlock__greenText"]}>
                  Active Members
                </h3>
              </div>
              <div className={style["searchBlock"]}>
                <input
                  className={style["searchBlock__input"]}
                  placeholder="Search"
                ></input>
                <img
                  className={style["searchBlock__icon"]}
                  src="./assets/icons/search 1.png"
                />
              </div>
            </div>
            <div className={style["allCustomers-columnTitles"]}>
              <h4 className={style["allCustomers-columnTitles__text"]}>
                Customer Name
              </h4>
              <h4 className={style["allCustomers-columnTitles__text"]}>
                Company
              </h4>
              <h4 className={style["allCustomers-columnTitles__text"]}>
                Phone Number
              </h4>
              <h4 className={style["allCustomers-columnTitles__text"]}>
                Email
              </h4>
              <h4 className={style["allCustomers-columnTitles__text"]}>
                Country
              </h4>
              <h4 className={style["allCustomers-columnTitles__text"]}>
                Status
              </h4>
            </div>
            <div className={style["allCustomers__bigLine"]}></div>
            <div className={style["allCustomers-list"]}>
              <div className={style["allCustomers-customer"]}>
                <h3 className={style["allCustomers-customer__info"]}>
                  Jane Cooper
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  Microsoft
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  (225) 555-0118
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  jane@microsoft.com
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  United States
                </h3>
                <h3 className={style["allCustomers-customer__active"]}>
                  Active
                </h3>
              </div>
              <div className={style["allCustomers__smallLine"]}></div>
              <div className={style["allCustomers-customer"]}>
                <h3 className={style["allCustomers-customer__info"]}>
                  Floyd Miles
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>Yahoo</h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  (205) 555-0100
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  floyd@yahoo.com
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  Kiribati
                </h3>
                <h3 className={style["allCustomers-customer__notActive"]}>
                  Inactive
                </h3>
              </div>
              <div className={style["allCustomers__smallLine"]}></div>
              <div className={style["allCustomers-customer"]}>
                <h3 className={style["allCustomers-customer__info"]}>
                  Ronald Richards
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>Adobe</h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  (302) 555-0107
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  ronald@adobe.com
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>Israel</h3>
                <h3 className={style["allCustomers-customer__notActive"]}>
                  Inactive
                </h3>
              </div>
              <div className={style["allCustomers__smallLine"]}></div>
              <div className={style["allCustomers-customer"]}>
                <h3 className={style["allCustomers-customer__info"]}>
                  Marvin McKinney
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>Tesla</h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  (252) 555-0126
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  marvin@tesla.com
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>Iran</h3>
                <h3 className={style["allCustomers-customer__active"]}>
                  Active
                </h3>
              </div>
              <div className={style["allCustomers__smallLine"]}></div>
              <div className={style["allCustomers-customer"]}>
                <h3 className={style["allCustomers-customer__info"]}>
                  Jerome Bell
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>Google</h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  (629) 555-0129
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  jerome@google.com
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  Réunion
                </h3>
                <h3 className={style["allCustomers-customer__active"]}>
                  Active
                </h3>
              </div>
              <div className={style["allCustomers__smallLine"]}></div>
              <div className={style["allCustomers-customer"]}>
                <h3 className={style["allCustomers-customer__info"]}>
                  Kathryn Murphy
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  Microsoft
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  (406) 555-0120
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  kathryn@microsoft.com
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  Curaçao
                </h3>
                <h3 className={style["allCustomers-customer__active"]}>
                  Active
                </h3>
              </div>
              <div className={style["allCustomers__smallLine"]}></div>
              <div className={style["allCustomers-customer"]}>
                <h3 className={style["allCustomers-customer__info"]}>
                  Jacob Jones
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>Yahoo</h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  (208) 555-0112
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  jacob@yahoo.com
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>Brazil</h3>
                <h3 className={style["allCustomers-customer__active"]}>
                  Active
                </h3>
              </div>
              <div className={style["allCustomers__smallLine"]}></div>
              <div className={style["allCustomers-customer"]}>
                <h3 className={style["allCustomers-customer__info"]}>
                  Kristin Watson
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  Facebook
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  (704) 555-0127
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  kristin@facebook.com
                </h3>
                <h3 className={style["allCustomers-customer__info"]}>
                  Åland Islands
                </h3>
                <h3 className={style["allCustomers-customer__notActive"]}>
                  Inactive
                </h3>
              </div>
              <div className={style["allCustomers__smallLine"]}></div>
            </div>
            <div className={style["allCustomers-pagination"]}>
              <h3 className={style["pagination__dataInfo"]}>
                Showing data 1 to 8 of 256K entries
              </h3>
              <div className={style["pagination-buttons"]}>
                <div className={style["pagination-buttons__button"]}>{"<"}</div>
                <div className={style["pagination-buttons__activeButton"]}>
                  1
                </div>
                <div className={style["pagination-buttons__button"]}>2</div>
                <div className={style["pagination-buttons__button"]}>3</div>
                <div className={style["pagination-buttons__button"]}>4</div>
                <h4 className={style["pagination-buttons__text"]}>...</h4>
                <div className={style["pagination-buttons__button"]}>40</div>
                <div className={style["pagination-buttons__button"]}>{">"}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={style["burgerMenu"]}>
          {burgerMenu && (
            <RiCloseFill
              onClick={handleBurgerStatusChange}
              className={style["burgerMenu__icon"]}
            />
          )}
          {!burgerMenu && (
            <RiMenuFill
              onClick={handleBurgerStatusChange}
              className={style["burgerMenu__icon"]}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;

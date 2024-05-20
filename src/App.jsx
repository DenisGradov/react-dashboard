import "./App.css";
import style from "./app.module.scss";
function App() {
  return (
    <>
      <div className={style["wrapper"]}>
        <div className={style["wrapper-left"]}>
          <div className={style["left-menu"]}>
            <div className={style["logo"]}>
              <img
                className={style["logo__img"]}
                alt="logo"
                src="/assets/logo.png"
              />
              <h3 className={style["logo__version"]}>v.01</h3>
            </div>
            <div className={style["navigation"]}>
              <div className={style["navigation-item"]}>
                <img
                  className={style["navigation-item__icon"]}
                  alt="icon"
                  src="/assets/icons/key-square.png"
                />
                <h2 className={style["navigation-item__text"]}>Dashboard</h2>
              </div>
              <div className={style["navigation-item"]}>
                <img
                  className={style["navigation-item__icon"]}
                  alt="icon"
                  src="/assets/icons/3d-square 1.png"
                />
                <h2 className={style["navigation-item__text"]}>Product</h2>
                <img
                  className={style["navigation-item__arrow"]}
                  alt="icon"
                  src="/assets/icons/chevron-right 2.png"
                />
              </div>
              <div
                className={`${style["navigation-item"]} ${style["navigation-item-active"]}`}
              >
                <img
                  className={style["navigation-item__icon"]}
                  alt="icon"
                  src="/assets/icons/user-square 1.png"
                />
                <h2 className={style["navigation-item-active__text"]}>
                  Customers
                </h2>
                <img
                  className={style["navigation-item__arrow"]}
                  alt="icon"
                  src="/assets/icons/chevron-right 2w.png"
                />
              </div>
              <div className={style["navigation-item"]}>
                <img
                  className={style["navigation-item__icon"]}
                  alt="icon"
                  src="/assets/icons/wallet-money 2.png"
                />
                <h2 className={style["navigation-item__text"]}>Income</h2>
                <img
                  className={style["navigation-item__arrow"]}
                  alt="icon"
                  src="/assets/icons/chevron-right 2.png"
                />
              </div>
              <div className={style["navigation-item"]}>
                <img
                  className={style["navigation-item__icon"]}
                  alt="icon"
                  src="/assets/icons/discount-shape 1.png"
                />
                <h2 className={style["navigation-item__text"]}>Promote</h2>
                <img
                  className={style["navigation-item__arrow"]}
                  alt="icon"
                  src="/assets/icons/chevron-right 2.png"
                />
              </div>
              <div className={style["navigation-item"]}>
                <img
                  className={style["navigation-item__icon"]}
                  alt="icon"
                  src="/assets/icons/message-question 1.png"
                />
                <h2 className={style["navigation-item__text"]}>Help</h2>
                <img
                  className={style["navigation-item__arrow"]}
                  alt="icon"
                  src="/assets/icons/chevron-right 2.png"
                />
              </div>
            </div>
            <div className={style["projectManager"]}>
              <img
                alt="Evano"
                src="/assets/avatars/Pm.png"
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
        <div className={style["wrapper-right"]}></div>
      </div>
    </>
  );
}

export default App;

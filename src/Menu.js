import React from "react";
import "wired-elements";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <wired-card elevation="5">
              <wired-image src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                </header>
                <br />
                <h4 className="price">${price}</h4>
              </div>
            </wired-card>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

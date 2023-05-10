import React from "react";
import food_item from "../../assets/images/food_item.webp";

interface ItemCardI {
  amount: string;
  desc: string;
  discount: string;
  id: string;
  img: string;
  quantity: string;
}

interface ItemCardProps {
  details: ItemCardI;
}

const ItemCard = ({ details }: ItemCardProps) => {
  const discountedPrice = (price: number, discount: number) => {
    return price - (price * discount) / 100;
  };

  return (
    <div className="item-card-container">
      <div
        style={{
          maxWidth: "120px",
          maxHeight: "120px",
          marginBottom: "4px",
          alignSelf: "center",
        }}
      >
        <img
          src={details.img}
          width={"120px"}
          height={"120px"}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="item-card-body">
        <p>{details.desc}</p>
        <p>{details.quantity}</p>
      </div>
      <div className="item-card-footer">
        <div>
          <p style={{ textDecoration: "line-through", color: "lightgray" }}>
            {"₹"}
            {details.amount}
          </p>
          <p>
            {"₹"}
            {discountedPrice(
              parseInt(details.amount),
              parseInt(details.discount)
            )}
          </p>
        </div>
        <button>Add</button>
      </div>
    </div>
  );
};

export default ItemCard;

import React from "react";

const ZaloButton = React.forwardRef(({ phoneNumber, label = "Chat Zalo" }, ref) => {
  const handleClick = () => {
    if (!phoneNumber) {
      console.warn("Chưa có số điện thoại Zalo");
      return;
    }
    // Forward sang Zalo app / web
    window.open(`https://zalo.me/${phoneNumber}`, "_blank");
  };

  return (
    <button className="zalo-button"
      ref={ref}
      onClick={handleClick}
    >
      {label}
    </button>
  );
});

export default ZaloButton;

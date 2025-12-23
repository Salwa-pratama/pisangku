import { memo } from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center text-sm text-gray-500 py-4">
      © {year} Pisangku. All rights reserved.
    </footer>
  );
};

export default memo(Footer);

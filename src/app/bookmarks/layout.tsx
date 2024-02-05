import { FC } from "react";

const BookmarkLayout: FC<any> = ({ children }) => {
  return (
    <div>
      <div>list</div>
      <div>{children}</div>
    </div>
  );
};

export default BookmarkLayout;

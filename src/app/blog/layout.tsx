import { FC } from "react";

const WritingLayout: FC<any> = ({ children }) => {
  return (
    <div>
      <div>list</div>
      <div>{children}</div>
    </div>
  );
};

export default WritingLayout;

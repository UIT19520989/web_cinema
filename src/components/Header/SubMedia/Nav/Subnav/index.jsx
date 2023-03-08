import { Button, Dropdown } from "antd";
import "./Subnav.css";

const Subnav = ({ items, type }) => {
  return (
    <Dropdown
      menu={{
        items,
      }}
      placement='bottomLeft'
      arrow
    >
      <Button>{type}</Button>
    </Dropdown>
  );
};

export default Subnav;

import { SearchOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
const BtnSearch = () => {
  return (
    <Tooltip title='search'>
      <Button
        type='link'
        icon={
          <SearchOutlined
            style={{
              fontSize: "1.4em",
              color: "#01b4e4",
            }}
          />
        }
      />
    </Tooltip>
  );
};

export default BtnSearch;

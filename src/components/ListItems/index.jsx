import { Datagrid, EmailField, List, TextField } from "react-admin";
import FieldUI from "../FieldUI";
import PropTypes from "prop-types";

export const ListItems = ({ fields }) => {
  const getElementByType = (source, key) => ({
    email: <EmailField source={source} key={key} />,
    text: <TextField source={source} key={key} />,
    custom: <FieldUI source={source} key={key} />,
  });

  return (
    <List>
      <Datagrid rowClick="edit">
        {fields.map(
          ({ source, type }, index) => getElementByType(source, index)[type]
        )}
      </Datagrid>
    </List>
  );
};

ListItems.prototype = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["email", "text", "custom"]),
    }).isRequired
  ).isRequired,
};

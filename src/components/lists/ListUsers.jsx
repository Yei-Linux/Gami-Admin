import { ListItems } from "../ListItems";

const ListUsers = () => {
  return (
    <ListItems
      fields={[
        { source: "id", type: "custom" },
        { source: "name", type: "custom" },
        { source: "username", type: "custom" },
        { source: "email", type: "email" },
        { source: "address.street", type: "custom" },
        { source: "phone", type: "text" },
        { source: "website", type: "text" },
        { source: "company.name", type: "custom" },
      ]}
    />
  );
};

export default ListUsers;

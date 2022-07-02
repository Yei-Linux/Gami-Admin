import { ListItems } from "../ListItems";

const ListPosts = () => {
  return (
    <ListItems
      fields={[
        { source: "id", type: "custom" },
        { source: "title", type: "custom" },
        { source: "body", type: "custom" },
      ]}
    />
  );
};

export default ListPosts;

import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import ListUsers from "./components/lists/ListUsers";
import ListPosts from "./components/lists/ListPosts";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={ListPosts} />
    <Resource name="users" list={ListUsers} />
  </Admin>
);

export default App;

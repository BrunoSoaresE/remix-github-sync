import { Form, useParams,useNavigation } from "@remix-run/react";

import { useState } from "react";
interface SelectedUser {
  id: number;
  username: string;
}

export const users: SelectedUser[] = [
  { id: 1, username: "BrunoSoaresE" },
  { id: 2, username: "Vedovelli" },
  { id: 3, username: "Bob" },
  { id: 4, username: "Larry" },
  { id: 5, username: "Thomas" },
  { id: 6, username: "Paul" },
];

export default function SelectUser() {
  const params = useParams();
  const transition = useNavigation();

  const loading = transition.state === "loading";

  const [selected, setSelected] = useState<string>(
    params.username ?? users[0].username
  );


  return (
    <Form
      method="get"
      action={`/github/${selected}`}
      className="flex items-center gap-4"
    >
      <label htmlFor="githubUser" className="sr-only">
        Select a Github User
      </label>
      <select
        onChange={(e) => setSelected(e.target.value)}
        id="githubUser"
        disabled={loading}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        defaultValue={selected}
      >
        {users.map((user) => (
          <option key={user.id}>{user.username}</option>
        ))}
      </select>
      <button
        type="submit"
        className="w-32 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {loading ? "Carregando..." : "Pesquisar"}
      </button>
    </Form>
  );
}

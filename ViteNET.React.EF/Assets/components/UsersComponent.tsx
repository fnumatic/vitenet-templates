import { useState, useEffect } from "react";
import { Page } from "./ui/Page";

export function UsersComponent() {
  const [users, setUsers] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/test/users");
      const txt = await res.text();
      setUsers(txt);
    };
    fetchUsers();
  }, []);

  return (
    <Page title="Users">
      <p className="mt-6">{users}</p>
    </Page>
  );
}

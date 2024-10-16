import { useState, useEffect } from "react";
import { Page } from "./ui/Page";

export function TestComponent() {
  const [testData, setTestData] = useState('');

  useEffect(() => {
    const fetchTest = async () => {
      const res = await fetch("/api/test/");
      const txt = await res.text();
      setTestData(txt);
    };
    fetchTest();
  }, []);

  return (
    <Page title="Test">
      <p className="mt-6">{testData}</p>
    </Page>
  );
}

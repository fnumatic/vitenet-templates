import { useState } from "react";
import { Page } from "./ui/Page";
import { Button } from "./ui/Button";

export function Home() {
  const [count, setCount] = useState(0);

  return (
    <Page title="Home">
      <div className="mt-6">
        <Button 
        onClick={() => setCount((count) => count + 1)} 
        className="bg-gray-100 hover:bg-gray-300  ">
          count is {count}
        </Button>
      </div>
    </Page>
  );
}

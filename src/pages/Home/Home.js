import React from "react";

import { useUiSlice } from "../../hooks";

export default function Home() {
  const [{ loading }, { finishLoading }] = useUiSlice();

  React.useEffect(() => {
    setTimeout(finishLoading, 1000);
  }, []);

  return <div>Home is {loading ? "loading" : "working"}!</div>;
}

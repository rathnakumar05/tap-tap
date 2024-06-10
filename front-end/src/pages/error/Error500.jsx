import { useEffect } from "react";

import { setBodyClass, removeBodyClass } from "../../utlis/ui.js";

function Error500() {
  return (
    <main className="text-center">
      <h1 className="text-[85px] font-semibold text-white">500</h1>
      <h1 className="text-[34px] text-white">Internal Server error</h1>
    </main>
  );
}

export default Error500;

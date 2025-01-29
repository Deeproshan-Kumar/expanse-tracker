import React, { useState } from "react";

import AppContext from "../contexts/AppContext";

function ExpanseProvider({children}) {
    const [expanses, setExpanses] = useState(null);
    <AppContext.Provider value={{expanses, setExpanses}}>
        {children}
    </AppContext.Provider>
}

export default ExpanseProvider;
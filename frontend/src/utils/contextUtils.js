import React from "react";

function makeContext(data) {
    return React.createContext({ ...data })
}

function unpackContext(context) {
    return context.userContext._currentValue
}

export {
    makeContext,
    unpackContext
}
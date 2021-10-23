import React from "react";

function makeContext(data) {
    return React.createContext({ ...data })
}

function unpackContext(context) {
    let contextObj = {}
    for (const [key, value] of Object.entries(context.userContext._currentValue)){
        let arr = value.split('"')
        contextObj[key] = arr.length > 1 ? arr[1] : arr[0]
    }
    return contextObj
}

export {
    makeContext,
    unpackContext
}
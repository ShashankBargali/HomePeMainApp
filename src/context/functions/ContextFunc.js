
const urlParser = (mainUrl) => {
    const url = mainUrl
    let regex = /[?&]([^=#]+)=([^&#]*)/g,
        params = {},
        match
    while ((match = regex.exec(url))) {
        params[match[1]] = match[2]
    }
    return params;
}

export { urlParser }



export const getPageData = ({libraries}) => {
    return libraries.source.api.get({
        endpoint: "pages",
        params: { _embed: true, slug: "/single-trip-travel-insurance" },
    })
}




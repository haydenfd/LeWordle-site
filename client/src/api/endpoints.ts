let baseUrl:string = "http://localhost:8000"

let endpointsList = {
    players: "/api/players",
    users: "/api/users",
}

let buildEndpoint = (endpoint: string) : string => {

    return `${baseUrl}${endpoint}`

}

export { buildEndpoint, endpointsList }
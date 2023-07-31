let baseUrl:string = "http://localhost:8000"

let endpointsList = {
    fetchAllPlayers: "/api/players/all",
    users: "/api/users",
    initUser: "/api/users/init"
}

let buildEndpoint = (endpoint: string) : string => {

    return `${baseUrl}${endpoint}`

}

export { buildEndpoint, endpointsList }
let baseUrl:string = "http://localhost:8000/api"

let endpointsList = {
    fetchAllPlayers: "/players/all",
    users: "/users",
    initUser: "/users/init",
    guessPlayer: "/players/guess_player"
}

let buildEndpoint = (endpoint: string) : string => {

    return `${baseUrl}${endpoint}`

}

export { buildEndpoint, endpointsList }
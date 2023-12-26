let baseUrl:string = 'http://localhost:8000/api'

export let endpointMapping : { [k:string] : string } = 
{
    initUser: '/users/init-user/',
    retrieveUser: '/users/', // need to add user_id path param here
    fetchAllPlayers: '/players/all-players',
}

export function buildApiEndpoint (endpoint: string) : string {

    const url:string = `${baseUrl}${endpoint}`
    return url
}

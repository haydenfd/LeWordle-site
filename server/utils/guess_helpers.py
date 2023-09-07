nba_team_info = {
    "ATL": {"conference": "EAST", "division": "SE"},
    "WAS": {"conference": "EAST", "division": "SE"},
    "CHA": {"conference": "EAST", "division": "SE"},
    "MIA": {"conference": "EAST", "division": "SE"},
    "ORL": {"conference": "EAST", "division": "SE"},
    "HOU": {"conference": "WEST", "division": "SW"},
    "DAL": {"conference": "WEST", "division": "SW"},
    "MEM": {"conference": "WEST", "division": "SW"},
    "SAS": {"conference": "WEST", "division": "SW"},
    "NOP": {"conference": "WEST", "division": "SW"},
    "BOS": {"conference": "EAST", "division": "ATL"},
    "NYK": {"conference": "EAST", "division": "ATL"},
    "PHI": {"conference": "EAST", "division": "ATL"},
    "TOR": {"conference": "EAST", "division": "ATL"},
    "BKN": {"conference": "EAST", "division": "ATL"},
    "CHI": {"conference": "EAST", "division": "CEN"},
    "CLE": {"conference": "EAST", "division": "CEN"},
    "DET": {"conference": "EAST", "division": "CEN"},
    "IND": {"conference": "EAST", "division": "CEN"},
    "MIL": {"conference": "EAST", "division": "CEN"},
    "DEN": {"conference": "WEST", "division": "NW"},
    "OKC": {"conference": "WEST", "division": "NW"},
    "POR": {"conference": "WEST", "division": "NW"},
    "UTA": {"conference": "WEST", "division": "NW"},
    "MIN": {"conference": "WEST", "division": "NW"},
    "GSW": {"conference": "WEST", "division": "PAC"},
    "LAC": {"conference": "WEST", "division": "PAC"},
    "LAL": {"conference": "WEST", "division": "PAC"},
    "PHX": {"conference": "WEST", "division": "PAC"},
    "SAC": {"conference": "WEST", "division": "PAC"},
}


def map_team_to_conf_div(team_tricode: str) -> dict[str, str]:

    if team_tricode in nba_team_info:
        return nba_team_info[team_tricode]
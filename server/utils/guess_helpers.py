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
    
def calculate_position_similarity(position1, position2):

    # G, F, C, G-F, F-G, C-F, F-C
    # G -- 1
    # F -- 3
    # G-F or F-G -- 2

    # C -- 5
    # F-C or C-F -- 4
    position_mapping = {
    "G": 1,
    "F": 3,
    "G-F": 2,
    "F-G": 2,
    "C": 5,
    "F-C": 4,
    "C-F": 4,
    }

    position1_mapping = position_mapping[position1]
    position2_mapping = position_mapping[position2]

    mapping_eval = abs(position1_mapping - position2_mapping)
    
    if mapping_eval == 0:
        return 2
    elif mapping_eval == 1:
        return 1
    else: 
        return 0

def calculate_height_similarity(guess_height_ft, guess_height_in, correct_height_ft, correct_height_in):
    guess_height = (12 * guess_height_ft) + guess_height_in
    correct_height = (12 * correct_height_ft) + correct_height_in
    if guess_height == correct_height:
        return 0
    elif abs(guess_height - correct_height) <= 2:
        if correct_height > guess_height:
            return 1
        else:
            return -1
    else:
        if correct_height > guess_height:
            return 2
        else:
            return -2
         
def calculate_age_similarity(guess_age, correct_age):
    if guess_age == correct_age:
        return 0
    elif abs(guess_age - correct_age <= 2):
        if (correct_age > guess_age):
            return 1
        else:
            return -1
    else:
        if correct_age > guess_age:
            return 2
        else:
            return -2

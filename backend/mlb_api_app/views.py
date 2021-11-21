from django.shortcuts import render
from django.http import JsonResponse, response
import requests
from rest_framework.viewsets import ModelViewSet
from mlb_api_app.serializers import PlayerSerializer
from mlb_api_app.models import Player

class PlayerViewSet(ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
    
def get_player(player_id):
    return Player.objects.get(id=player_id)

def generate_search_name(last_name):
    return f"http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='{ last_name }%25'"

def get_players(request, player_id):
    player = get_player(player_id)
    response = requests.get(f"http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='{ player.last_name }%25'").json()
    list = response['search_player_all']['queryResults']['row']
    return JsonResponse(list, safe=False)


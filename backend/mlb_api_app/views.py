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

def get_players(request, player_id):
    player = get_player(player_id)
    response = requests.get(f"http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='{ player.last_name }%25'").json()
    amount = response['search_player_all']['queryResults']['totalSize']
    array_for_one = []
    if (amount == "1"):
        list = response['search_player_all']['queryResults']['row']
        array_for_one.append(list)
        return JsonResponse(array_for_one, safe=False)
    else:
        list = response['search_player_all']['queryResults']['row']
        return JsonResponse(list, safe=False)
    
def get_player_details(request, player_id):
    response = requests.get(f"http://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code='mlb'&player_id={ player_id }").json()
    detail = response['player_info']['queryResults']['row']
    return JsonResponse(detail, safe=False)


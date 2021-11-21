from rest_framework.serializers import ModelSerializer
from mlb_api_app.models import Player

class PlayerSerializer(ModelSerializer):
    class Meta:
        model = Player
        fields = '__all__'
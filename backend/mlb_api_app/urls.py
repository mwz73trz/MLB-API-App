from django.urls import path, include
from rest_framework import views
from rest_framework.routers import DefaultRouter
from mlb_api_app.views import PlayerViewSet
from mlb_api_app import views

router = DefaultRouter()
router.register('players', PlayerViewSet, basename='player')

urlpatterns = [
    path('', include(router.urls)),
    path('players/<int:player_id>/list/', views.get_players, name='get_players'),
    path('list/<int:player_id>/', views.get_player_details, name='get_player_details'),
]
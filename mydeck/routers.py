from rest_framework import routers
from .viewsets import DeckViewSet, CardViewSet

router = routers.DefaultRouter()
router.register(r'deck', DeckViewSet)
router.register(r'card', CardViewSet)
urlpatterns = router.urls
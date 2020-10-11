from django.urls import path

from . import views
from . import routers

urlpatterns = [
    #path('', views.index, name='index'),
    #path('card/', views.CardCreate.as_view() ),
    #path('<int:pk>/', views.CardListCreate.as_view() ),
    #path('card/<int:pk>/', views.CardDetail.as_view()),
    path('decks/', views.DecksList.as_view() ),
    path('decks/create/', views.DecksCreate.as_view() ), 
    path('decks/<str:deck_name>', views.DeckDetails.as_view() ),
    #path('', mydeck_views.frontend),
    #path('deck/', mydeck_views.frontend),
    #path('card/', mydeck_views.frontend),
    #path('deck/<slug:slug>/', mydeck_views.frontend),
    #path('card/<slug:slug>/', mydeck_views.frontend),
]
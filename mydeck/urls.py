from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/', views.CardCreate.as_view() ),
    path('deck/', views.DeckCreate.as_view() ),   
    #path('<int:pk>/', views.CardListCreate.as_view() ),
       #url(r'^Anki/Decks/', include('Decks.urls')),       #List multiple Anki Decks
    #url(r'^Anki/Deck/', include('Deck.urls')),         #Single Deck View
    #url(r'^Anki/AddCard/', include('AddCard.urls')),   #Adding a card
	#url(r'^Anki/Browse/', include('Browse.urls')),     #Browse content if available
    #url(r'^Anki/Stats/', include('Stats.urls'))        #Dashboard of users performance
]
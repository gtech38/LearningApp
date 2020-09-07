from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('card/', views.CardCreate.as_view() ),
    #path('<int:pk>/', views.CardListCreate.as_view() ),
    path('card/<int:pk>/', views.CardDetail.as_view()),
    path('decks/', views.DecksList.as_view() ),
    path('decks/<int:pk>', views.DeckDetails.as_view() ),
]
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/card/', views.CardListCreate.as_view()),
]
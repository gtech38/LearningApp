from django.conf.urls import url, include
from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('', views.index ),
    path('decks', views.index ),
    path('notes', views.index),
    path('flashcards', views.index),
    path('todos', views.index),
]
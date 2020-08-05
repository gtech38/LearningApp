from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/', views.CardListCreate.as_view() ),
    #path('<int:pk>/', views.CardListCreate.as_view() ),
]
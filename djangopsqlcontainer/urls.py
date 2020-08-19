"""djangopsqlcontainer URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('', include('mydeck.urls')),
    path('', include('table.urls')),
    url(r'^admin/', admin.site.urls),
    #url(r'^Anki/Decks/', include('Decks.urls')),       #List multiple Anki Decks
    #url(r'^Anki/Deck/', include('Deck.urls')),         #Single Deck View
    #url(r'^Anki/AddCard/', include('AddCard.urls')),   #Adding a card
	#url(r'^Anki/Browse/', include('Browse.urls')),     #Browse content if available
    #url(r'^Anki/Stats/', include('Stats.urls'))        #Dashboard of users performance
]

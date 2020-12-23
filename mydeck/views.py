from django.shortcuts import render
from .models import Deck, Card
from .serializers import DeckSerializer, CardSerializer
from rest_framework import generics
from rest_framework import permissions
from django.http import HttpResponse
from datetime import date, datetime
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

#Deck APIs
class DecksList(generics.ListAPIView):
#List all my Decks.

	#permission_classes = [permissions.IsAuthenticated]
	queryset = Deck.objects.all()
	serializer_class = DeckSerializer
	#for deck in queryset:
	#	deck_name = deck.deck_name
	#	cards_deck = deck.cards_deck

class DecksCreate(generics.CreateAPIView):
#Create new Deck.

	#permission_classes = [permissions.IsAuthenticated]
	queryset = Deck.objects.all()
	serializer_class = DeckSerializer

class DeckDetails(generics.RetrieveUpdateDestroyAPIView):
#Retrieve, update or delete a selected Deck.
	queryset = Deck.objects.all()
	serializer_class = DeckSerializer
	lookup_field = 'slug'
	#permission_classes = [permissions.IsAuthenticated]


#Card APIs
class CardCreate(generics.ListCreateAPIView):
	queryset = Card.objects.all()
	serializer_class = CardSerializer

class CardDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Card.objects.all()
	serializer_class = CardSerializer
	lookup_field = 'slug',

class CardsiInDeck(generics.RetrieveUpdateDestroyAPIView):
	queryset = Card.objects.all()
	serializer_class = CardSerializer
	lookup_field = 'deck_name'

#Viewing Users
'''
from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
          model = User
          fields = ('url', 'username', 'email', 'groups')

class GroupSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
	        model = Group\
	        fields = ('url', 'name')
'''
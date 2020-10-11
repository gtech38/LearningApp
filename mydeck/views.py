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

# Create your views here.
def frontend(request, slug=None):
    """Vue.js will take care of everything else."""
    decks = Deck.objects.all()
    #cards = Card.objects.all()
    
    data = {
    #    'cards': cards,
        'decks': decks,
    }

    #return render(request, 'mydeck/index.html', data)
    return render(request, 'mydeck/template.html', data)

'''
def playcards(request, slug):
    """Vue.js will take care of everything else."""
    deck = Deck.objects.filter(slug = slug)
    deck_id = deck.id
    cards = Card.objects.filter(deck_id = deck_id)
    
    data = {
        'cards': cards,
        'decks': decks,
    }

    return render(request, 'mydeck/flashcards.html', data)
'''
'''
def index(request):
	today = date.today()
	now = datetime.now()
	current_date = today.strftime("%m/%d/%Y")
	current_time = now.strftime("%H:%M:%S")
	html = "<html><body>Welcome to Gogy</body><br>Today is " + current_date + ".</br><br>The time is " + current_time +".</br></html>"
	return HttpResponse(html)
'''

class DecksList(generics.ListAPIView):
	"""
	List all my Decks.
	"""
	#permission_classes = [permissions.IsAuthenticated]
	queryset = Deck.objects.all()
	serializer_class = DeckSerializer
	#for deck in queryset:
	#	deck_name = deck.deck_name
	#	cards_deck = deck.cards_deck

class DecksCreate(generics.CreateAPIView):
	"""
	Create new Deck.
	"""
	#permission_classes = [permissions.IsAuthenticated]
	queryset = Deck.objects.all()
	serializer_class = DeckSerializer
'''
class DeckDetails(generics.ListCreateAPIView):
	"""
	Retrieve, update or delete a selected Deck.
	"""
	#queryset = Deck.objects.all()
	#serializer_class = DeckSerializer
	#committee_relations = CommitteeRole.objects.filter(user=request.user).values_list('committee__pk', flat=True)
	#item_list = Item.objects.filter(committees__in=committee_relations)98ii98i8
	decks = Deck.objects.distinct()
	card_set = []
	for deck in decks:
		cset = Card.objects.filter()
	queryset = Card.objects.all()
	serializer_class = CardSerializer
	#permission_classes = [permissions.IsAuthenticated]
'''

class DeckDetails(generics.RetrieveUpdateDestroyAPIView):
	"""
	Retrieve, update or delete a selected Deck.
	"""
	queryset = Deck.objects.all()
	serializer_class = DeckSerializer
	#permission_classes = [permissions.IsAuthenticated]

class CardCreate(generics.ListCreateAPIView):
	#queryset = Card.objects.all()
	serializer_class = CardSerializer

class CardDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Card.objects.all()
	serializer_class = CardSerializer

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
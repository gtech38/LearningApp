from django.shortcuts import render
from .models import Card, Deck
from .serializers import CardSerializer, DeckSerializer
from rest_framework import generics
from rest_framework import permissions
from django.http import HttpResponse
from datetime import date, datetime
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
# Create your views here.




def index(request):
	today = date.today()
	now = datetime.now()
	current_date = today.strftime("%m/%d/%Y")
	current_time = now.strftime("%H:%M:%S")
	html = "<html><body>Welcome to Gogy</body><br>Today is " + current_date + ".</br><br>The time is " + current_time +".</br></html>"
	return HttpResponse(html)


class CardCreate(generics.ListCreateAPIView):
	queryset = Card.objects.all()
	serializer_class = CardSerializer


class CardDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Card.objects.all()
	serializer_class = CardSerializer
	#permission_classes = [permissions.IsAuthenticated]


class DecksList(generics.ListCreateAPIView):
	"""
	List all Decks, or create a new Deck.
	"""
	queryset = Deck.objects.all()
	serializer_class = DeckSerializer


class DeckDetails(generics.ListCreateAPIView):
	queryset = Deck.objects.all()
	ßserializer_class = DeckSerializer
	#permission_classes = [permissions.IsAuthenticated]
	"""
	Retrieve, update or delete a Deck instance.
	"""
	def get_object(self, pk):
		try:
			return Deck.objects.get(pk=pk)
		except Deck.DoesNotExist:
			raise Http404

	def get(self, request, pk, format=None):
		Deck = self.get_object(pk)
		serializer = DeckSerializer(Deck)
		return Response(serializer.data)

	def put(self, request, pk, format=None):
		Deck = self.get_object(pk)
		serializer = DeckSerializer(Deck, data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request, pk, format=None):
		Deck = self.get_object(pk)
		Deck.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)


'''
#Viewing Users
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
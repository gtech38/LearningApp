from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from datetime import date, datetime


def index(request):
	today = date.today()
	now = datetime.now()
	current_date = today.strftime("%m/%d/%Y")
	current_time = now.strftime("%H:%M:%S")
	html = "<html><body>Welcome to Gogy</body><br>Today is " + current_date + ".</br><br>The time is " + current_time +".</br></html>"
	return HttpResponse(html)

from .models import Card
from .serializers import CardSerializer
from rest_framework import generics

class CardListCreate(generics.ListCreateAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
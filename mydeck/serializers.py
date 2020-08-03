from rest_framework import serializers
from .models import Card

'''
class CardSerializer(serializers.ModelSerializer):
	card_id = serializers.CharField(max_length=10)
	card_type = serializers.CharField(max_length=10)
	card_content = serializers.ListField(child=serializers.CharField(max_length=800))
'''

class CardSerializer(serializers.ModelSerializer):
	class Meta:
		model = Card
		fields =('card_id', 'card_type', 'card_content')
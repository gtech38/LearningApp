from rest_framework import serializers
from .models import Card, Deck

class CardSerializer(serializers.ModelSerializer):
	card_id = serializers.CharField(max_length=10)
	card_type = serializers.CharField(max_length=10)
	card_content = serializers.ListField(child=serializers.CharField(max_length=800))

	def create(self, validated_data):
		return Card.objects.create(**validated_data)

	def update(self, instance, validated_data):
		instance.card_type = validated_data.get('card_type', instance.card_type)
		instance.card_content = validated_data.get('card_content', instance.card_content)
		instance.save()
		return instance

	class Meta:
		model = Card
		fields =('id', 'card_id', 'card_type', 'card_content')


class DeckSerializer(serializers.ModelSerializer):
	deck_id = serializers.CharField(max_length=30)
	#deck_cards is an array of card_ids
	deck_cards = serializers.ListField(child=serializers.CharField(max_length=10)) 

	def create(self, validated_data):
		return Deck.objects.create(**validated_data)

	def update(self, instance, validated_data):
		instance.deck_id = validated_data.get('deck_id', instance.deck_id)
		instance.deck_cards = validated_data.get('deck_cards', instance.deck_cards)
		instance.save()
		return instance

	class Meta:
		model = Deck
		fields =('id', 'deck_id', 'deck_cards')
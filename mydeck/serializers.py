from rest_framework import serializers
from .models import Deck, Card
from django.utils.text import slugify

'''
{
	"deck_name": "New Deck",
	"cards_deck": [
		{
			"card_type" : "flash", 
			"card_answer" : "Pedegogy",
			"card_question" : "The Study of Learning" 
		}
	],
	"deck_id":""
}
'''


class CardSerializer(serializers.ModelSerializer):
	#card_id = serializers.CharField(max_length=10)
	card_type = serializers.CharField(max_length=10)
	#card_content = serializers.ListField(child=serializers.CharField(max_length=800))
	card_question = serializers.CharField(max_length=100)
	card_answer = serializers.CharField(max_length=100)

	def create(self, validated_data):
		return Card.objects.create(**validated_data)

	def update(self, instance, validated_data):
		instance.card_type = validated_data.get('card_type', instance.card_type)
		instance.card_answer = validated_data.get('card_canswer', instance.card_answer)
		instance.card_question = validated_data.get('card_question', instance.card_question)
		instance.slug = validated_data.get('slug', instance.slug)
		instance.deck_id = validated_data.get('deck_id', instance.deck_id)
		instance.save()
		return instance

	def create(self, validated_data): 
		#card_serialization = CardSerializer(validated_data.get('cards_deck'))
		#card_serialization.save()
		return Card.objects.create(**validated_data)

	def to_representation(self, instance):
		return instance

	class Meta:
		model = Card
		fields = '__all__'
		lookup_field = 'slug'
		#fields =('card_type', 'card_question', 'card_answer')


class DeckSerializer(serializers.ModelSerializer):
	deck_name = serializers.CharField(max_length=30, default = '')
	slug = serializers.CharField(max_length=64, default = '')

	#Set deck_id when deck is created.
	def create(self, validated_data): 
		return Deck.objects.create(**validated_data)
			
	def update(self, instance, validated_data):
		instance.deck_name = validated_data.get('deck_name')
		#instance.deck_cards = validated_data.get('deck_cards', instance.deck_cards)
		instance.save()
		#instance.cards_deck.set(validated_data.get('cards_deck'))
		return instance

	def add_card(self, instance, validated_data):
		self.cards_deck.add(validated_data.get('cards_deck'))

	class Meta:
		model = Deck
		#fields = '__all__'
		fields = ('deck_name', 'slug', 'uid')
		lookup_field = 'slug'
		#exclude = ('cards_deck', 'id')
		#fields =('id', 'deck_name', 'deck_cards', 'cards')


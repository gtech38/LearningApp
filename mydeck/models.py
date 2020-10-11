from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.utils.text import slugify
from django.contrib.auth.models import User
import uuid

# Create your models here.

#Deck:
#	deck_id - A Named Unique ID for person's Deck
#	cards_deck - A JSONB object that contains the list of cards for this deck.
#	creator - we will need to add support for Users
#	deck_id - a slugified deck_name +  
#def get_default_deck():
#	return {0, '0000000000'}

class Deck(models.Model):
	deck_name = models.CharField(max_length=20, default='')
	slug = models.CharField( max_length=64, blank=True, editable=False)
	uid = models.UUIDField(max_length=32, unique = True, blank=True, default=uuid.uuid4, editable=False)
	#cards_deck = models.JSONField(default=list) 
	#cards_deck = models.ManyToManyField('Card')
	#deck_id = models.SlugField(unique=True, null=True, blank=True)
	pass
	
	def __str__(self):
		return self.deck_name

	def save(self, *args, **kwargs):
		"""
		Hides slug field in admin, saves slug to use in url
		"""
		if not self.slug:
			self.slug = slugify(self.deck_name)
		super(Deck, self).save(*args, **kwargs)
		#slug_str = self.deck_name + "-" + str(self.uid)	
		#self.slug = slugify(slug_str)
		#if not self.uid:
		#	self.uid = '1234567890'	
'''
	def create_slug(deck_name):
		"""
		Creates unique slug for every deck
		"""
		base_slug = slugify(deck_name)
		slug = base_slug
		n = 0

		while Deck.objects.filter(deck_id=slug).count():
			n += 1
			slug = base_slug + '-' + str(n)
		return slug


	def create(self, **obj_data):

		if self.deck_id:
			return

		deck_name = obj_data['deck_name']
		obj_data['deck_id'] = create_slug(deck_name)
		cards_deck.set(obj_data['cards_deck'])

		return super().create(**obj_data)
'''


#Card:
#	card_type - Cards can be Flash, Cloze (Fill in the Blank), or nQuestions 
#	card_content - An array where Card 0 is the Answer Card, Card n is the nth Question.
# 		Flash      - For a flash card of terms, [0] would be the Term Answer, [1] would be the Question
#		Cloze	   - For 'Cloze Deletions', hypertext markup of sextions for Fill in the blank, [0] would be the uncovered card, [n] would be the answer for the nth blank 
#		nQuestions - For nQuestions - [0] is the Full Answer/Uncovered Diagram/Image, [n] is the answer of the nth Question/Blank/Label
#	If there is a deck of type Deck, you can get the cards of that deck through deck.cards_set.all()
#
#def get_default_card():
#		return {0, 'Card Content Goes Here'}

class Card(models.Model):
	uid = models.UUIDField(max_length=32, blank=True, unique=True, default=uuid.uuid4, editable=False)
	card_type = models.CharField(max_length=10, default='flash')
	card_question = models.CharField(max_length=100, default="The Study of Learning")
	card_answer = models.CharField(max_length=100, default="Pedegogy")
	deck_id = models.ForeignKey('mydeck.Deck', on_delete=models.CASCADE, blank=True)
	slug = models.CharField(default='', max_length=64, blank=True, editable=False)
	pass

	def __str__(self):
		return self.card_question

	def save(self, *args, **kwargs):
		"""
		Hides slug field in admin, saves slug to use in url
		"""
		if not self.slug:
			slug_str = self.card_type + " " + self.card_answer
			self.slug = slugify(slug_str)
		super(Card, self).save(*args, **kwargs)

'''
	def save(self, *args, **kwargs):
		"""
		Hides slug field in admin, saves slug to use in url
		"""
		if not self.slug:	
			self.slug = slugify(self.slug_str)	
		return super(Card, self).save(*args, **kwargs)

	def get_card_answer(self):
		return self.card_answer
	def get_card_question(self):
		return self.card_question

	def display_card(self):
		"""Create a string for Decks. This is required to display Decks in Admin."""
		return ', '.join(deck.deck_name for deck in self.decks.all()[:3])

	def Card(self, card_type, card_answer, card_question):
		self.card_type = card_type
		self.card_answer = card_answer
		self.card_question = card_question

	def create(self, **obj_data):
		self.card_type = onj_d	['card_type']
		self.card_question = obj_data['card_question']
		self.card_answer = obj_data['card_answer']
		return super().create(**obj_data)
'''
from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.

#Card:
#	card_id - A 10 Charachter Alpha-Numeric unique ID to identify the Card
#	card_type - Cards can be Flash, Cloze (Fill in the Blank), or nQuestions 
#	card_content - An array where Card 0 is the Answer Card, Card n is the nth Question.
# 		Flash      - For a flash card of terms, [0] would be the Term Answer, [1] would be the Question
#		Cloze	   - For 'Cloze Deletions', hypertext markup of sextions for Fill in the blank, [0] would be the uncovered card, [n] would be the answer for the nth blank 
#		nQuestions - For nQuestions - [0] is the Full Answer/Uncovered Diagram/Image, [n] is the answer of the nth Question/Blank/Label
#def get_default_card():
#		return {0, 'Card Content Goes Here'}

class Card(models.Model):
	card_id = models.CharField(max_length=10, default='0000000000')
	card_type = models.CharField(max_length=10, default='flash')
	card_content = ArrayField(
						models.CharField(max_length=800),
						size=10, blank=True, default=list
						)
	def __str__(self):
		return self.card_content[0]
	def card_answer(self):
		return self.card_content[0]
	def card_question(card_id):
		return self.card_content[card_id]
		


#Deck:
#	deck_id - A Named Unique ID for person's Deck
#	deck_cards - Array of card_id's

#def get_default_deck():
#	return {0, '0000000000'}

class Deck(models.Model):
	deck_id = models.CharField(max_length=20, default='new_deck')
	deck_cards = ArrayField(
					models.CharField(max_length=10),
					size=10, blank=True, default=list
						)
	def __str__(self):
		return self.deck_id

	def get_deck(self):
		return self
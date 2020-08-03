from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.

#Card:
#	card_id - A unique ID to identify the Card
#	card_type - Cards can be Flash, Cloze (Fill in the Blank), or nQuestions 
#	card_content - An array where Card 0 is the Answer Card, Card n is the nth Question.
# 		Flash      - For a flash card of terms, [0] would be the Term Answer, [1] would be the Question
#		Cloze	   - For 'Cloze Deletions', hypertext markup of sextions for Fill in the blank, [0] would be the uncovered card, [n] would be the answer for the nth blank 
#		nQuestions - For nQuestions - [0] is the Full Answer/Uncovered Diagram/Image, [n] is the answer of the nth Question/Blank/Label

class Card(models.Model):
	card_id = models.CharField(max_length=20)
	card_type = models.CharField(max_length=10)
	card_content = ArrayField(models.CharField(max_length=800))


#Deck:
#	deck_id - Unique ID for person's Deck
#	deck_cards - Array of card_id's

class Deck(models.Model):
		deck_id = models.CharField(max_length=20)
		deck_cards = ArrayField(models.CharField(max_length=20))
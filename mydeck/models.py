from django.db import models

# Create your models here.

#Card:
#	card_id - A unique ID to identify the Card
#	card_type - Cards can be Flash, Cloze (Fill in the Blank), or nQuestions 
#	card_question - An array of the 'questions' for a card. For a flash card of terms it would be 1 Question, for Cloze 
#	card_answer - The answer/full card infomation
class Card(models.Model):
	card_id = models.CharField(max_length=20)
	card_type = models.CharField(max_length=)
    question_text = models.CharField(max_length=200)
    answer_text = models.CharField(max_length=200)
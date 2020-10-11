from django.contrib import admin

# Register your models here.
from .models import Deck, Card

import random
import string

'''
def random_string_generator(size=10, chars=string.ascii_lowercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


def unique_id_generator(instance):
    new_id= random_string_generator()

    Klass= instance.__class__

    qs_exists= Klass.objects.filter(uid= new_id).exists()
    if qs_exists:
        return unique_id_generator(instance)

class DeckAdmin(admin.ModelAdmin):
	queryset = Deck.objects.all()

	prepopulated_fields = {'slug' : ['slug'], 'uid': ['slug'],}

class CardAdmin(admin.ModelAdmin):
	prepopulated_fields = {'slug' : ['slug'], 'uid': ['uid'],}
'''
admin.site.register(Card)#, CardAdmin)
admin.site.register(Deck)#, DeckAdmin)

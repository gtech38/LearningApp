LearningApp

This platform creates an ecosystem where we make people learn, improve, even adapt by using 'AI' and 'ML' algorithms to hack the way we learn.
These technologies are used to keep us consuming content as well as posing disruption in our workforce. It is time to use the technologies that we worry will take Jobs to create new opportunities and empower us to define our workforce.  



########################################################################################################################################
#Files and Folder Structure#############################################################################################################
########################################################################################################################################

djangopsqlcontainer/
  Dockerfile ---------- Spins up PSQL and Django Container, copys application to Django 
  requirements.txt ---------- requires Django, djangorestframework, and Postgresql
  docker-compose.yml
  manage.py

  djangopsqlcontainer/ ---------- Python Project (Django)
    __init__.py
    settings.py
    urls.py
    wsgi.py
    __pycache__/

  mydeck/ ---------- Python Web Application Backend (My deck of cards)
    __init__.py
    admin.py
    apps.py
    urls.py
    models.py
    tests.py
    serializers.py 
    views.py
    migrations_old/ ---------- Migrations that I messed something up in and need to remove
    migrations/
      __init__.py
    __pycache__/

  frontend/ -------------- React.js Single-Page Web Application

  Example_AnkiApp_Basic_Deck.csv
  Example_AnkiApp_TSV_Deck.zip


########################################################################################################################################
#Command Line Instructions##############################################################################################################
########################################################################################################################################

#Django#################################################################################################################################
python3 manage.py runserver ---------- Starts App running at http://0.0.0.0:8000/

#postgres###############################################################################################################################
Connects to database named 'template1' from localy hosted postgres: https://postgresapp.com/documentation/

Current database defaults in /djangopsqlcontainer/settings.py:95;
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'template1',
        'USER': 'gokulnune',
        'PORT': 5432,
    }
}

#React##################################################################################################################################
Watch Javascript logs while making edits;

while true               
  do
  yarn build
  sleep 3
  npm run dev
  sleep 5
done;


########################################################################################################################################
Django Serialized UIs for APIs

0.0.0.0:8000/card - Create a new card

0.0.0.0:8000/card/<int:pk> - Read, Update or Delete existing Card 

0.0.0.0:8000/decks -

0.0.0.0:8000/decks/<int:pk> - 




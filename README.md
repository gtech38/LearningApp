LearningApp

This platform creates an ecosystem where we make people learn, improve, even adapt by using 'AI' and 'ML' algorithms to hack the way we learn.
These technologies are used to keep us consuming content as well as posing disruption in our workforce. It is time to use the technologies that we worry will take Jobs to create new opportunities and empower us to define our workforce.  

To start, you will need two shells at /
First Shell;
docker-compose up mongo

Second Shell;
python3.9 manage.py runserver

#URL Catalog################################################################################################################################
0.0.0.0:8000/ - Dashboard
0.0.0.0:8000/decks - Flashcards
0.0.0.0:8000/notes - Notebooks and Spidercharts
0.0.0.0:8000/todo - Todo list populated by user and autopopulated by app schedule
0.0.0.0:8000/calendar - Schedule of events. study paths, 


Django Serialized UIs for APIs

0.0.0.0:8000/api/card - Create a new card

0.0.0.0:8000/api/card/<int:pk> - Read, Update or Delete existing Card 

0.0.0.0:8000/api/decks -

0.0.0.0:8000/api/decks/create - 
 
0.0.0.0:8000/api/decks/#str=<deck.uid> - look at a specific deck


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
docker-compose build
docker-compose build django
docker-compose build react

docker compose up
docker compose django up
docker compose mongo up
docker compose react up
docker compose mongo-express up

#Django#################################################################################################################################
/LearningApp/
python3.9 -m pipenv --python 3.9
python3.9 -m pipenv install
python3.9 -m pipenv shell
python3.9 manage.py runserver ---------- Starts App running at http://0.0.0.0:8000/

#React##################################################################################################################################


Watch Javascript logs while making edits;

while true               
  do
  yarn build
  sleep 3
  npm run dev
  sleep 5
done;


#mongodb################################################################################################################################
Connects to mongodb database running on container  

Current database defaults in
DATABASES = {
    'default': {
        'default': {
        'ENGINE': 'djongo',
        'ENFORCE_SCHEMA': True,
            'LOGGING': {
                'version': 1,
                'loggers': {
                    'djongo': {
                        'level': 'DEBUG',
                        'propogate': False,                        
                    }
                },
             },
        'NAME': 'learningapp',
        'CLIENT': {
            'host': 'mongo',
            #'host': '0.0.0.0',
            'port': 27017,
            'username': 'gokulnune',
            'password': 'example',
            'authSource': 'admin',
        }

    }
}

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







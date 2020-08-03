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

  mydeck/ ---------- Python Web Application (My deck of cards)
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

  Example_AnkiApp_Basic_Deck.csv
  Example_AnkiApp_TSV_Deck.zip


########################################################################################################################################
#Command Line Instructions##############################################################################################################
########################################################################################################################################

To start Application, go to root directory /djangopsqlcontainer and run 'docker-compose build' (Creates containers from dockerfile with latest saved Code) followed by 'docker-compose up' (Starts the docker containers in the dockerfile)

0.0.0.0:8000/admin
0.0.0.0:8000/mydeck

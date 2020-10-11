"""djangopsqlcontainer URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

from mydeck import views as mydeck_views

urlpatterns = [
    path('api/', include('mydeck.urls')),
    path('', include('frontend.urls')),
    url(r'^admin/', admin.site.urls),

    #paths for mydeck app
    #path('', mydeck_views.frontend),
    path('deck/', TemplateView.as_view(template_name='template.html')),    #path('deck/', mydeck_views.frontend),
    #path('card/', mydeck_views.frontend),
    #path('deck/<slug:slug>/', mydeck_views.frontend),
    #path('deck/<slug:slug>/play', mydeck_views.playcards),
    #path('card/<slug:slug>/', mydeck_views.frontend),
    #path('mydeck', TemplateView.as_view(template_name='index.html')),
    #path('deck/create/' mydeck_views.frontend),
]
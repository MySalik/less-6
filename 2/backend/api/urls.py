from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path("notes/", include('api.notes.urls'))
]

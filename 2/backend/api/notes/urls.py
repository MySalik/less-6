from django.urls import path
from .views import NotesDestroyAPIView, NotesListCreateAPIView


urlpatterns = [
    path("", NotesListCreateAPIView.as_view()),
    path("<int:pk>", NotesDestroyAPIView.as_view())
]

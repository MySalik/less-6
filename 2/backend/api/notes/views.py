from rest_framework.generics import ListCreateAPIView, DestroyAPIView

from .serializers import NotesSerializer
from .models import Notes


class NotesListCreateAPIView(ListCreateAPIView):
    queryset = Notes.objects.all()
    serializer_class = NotesSerializer


class NotesDestroyAPIView(DestroyAPIView):
    queryset = Notes.objects.all()
    serializer_class = NotesSerializer
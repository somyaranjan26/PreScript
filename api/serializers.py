from rest_framework import serializers
from .models import Note

class NoteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Note
        fields = ['User', 'email', 'created_At', 'title', 'note', 'score', 'recommendations']
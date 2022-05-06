import json
import sys
from importlib import reload
from api.score import get_patient_features, get_note_data, get_score, set_clean
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView
from rest_framework import status

from .serializers import NoteSerializer

class NoteCreateAPI(CreateAPIView):
    serializer_class = NoteSerializer

    def post(self, request, formate=None, *args, **kwargs):
        data = request.data
        data._mutable = True

        get_patient_features(data['note'])
        data['score'] = round(100 - round(get_score(), 2))
        data['recommendations'] = json.dumps(get_note_data())

        reload(sys.modules['api.score'])

        serializer = NoteSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    


from random import randrange
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView
from rest_framework import status

from .serializers import NoteSerializer

class NoteCreateAPI(CreateAPIView):
    serializer_class = NoteSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        data._mutable = True
        
        data['score'] = randrange(60, 100)

        serializer = NoteSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


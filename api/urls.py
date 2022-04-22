from django.urls import path
from .views import NoteCreateAPI

app_name = 'api'

urlpatterns = [
    path('', NoteCreateAPI.as_view(), name='writenotes')
]
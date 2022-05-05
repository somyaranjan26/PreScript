from django.db import models
from django.contrib.auth.models import User

class Note(models.Model):
    User = models.ForeignKey(User, on_delete=models.CASCADE, related_name='note')
    email = models.EmailField(max_length=225, default='admin@prescript.com')
    created_At = models.DateTimeField(auto_now=True)
    title = models.TextField(blank=True, null=True, default='Undefined Title')
    note = models.TextField(blank=True, null=True)
    score = models.DecimalField(blank=True, null=True, max_digits=5, decimal_places=2)
    recommendations = models.JSONField(null=True, default=dict)


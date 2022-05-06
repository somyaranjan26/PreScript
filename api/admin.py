from django.contrib import admin
from .models import Note

class NoteAdminView(admin.AdminSite):
    index_title = "PreScript Dashboard"
    site_header = "PreScript"
    site_title = "PreScript"

note_site = NoteAdminView(name='NoteAdminView')

class NoteAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'note', 'score', 'email', 'created_At']
    list_filter = ['created_At', 'email',]
    search_fields = ['title', 'note', 'score', 'email']
    list_per_page = 10
    ordering = ['id']

note_site.register(Note, NoteAdmin)
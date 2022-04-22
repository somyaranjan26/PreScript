from django.contrib import admin
from django.urls import path, include

from api.admin import note_site

urlpatterns = [
    path('site-admin/', admin.site.urls),
    path('admin/', note_site.urls),
    path('api/', include('api.urls', namespace='api')),
]

admin.site.index_title = "PreScript Dashboard"
admin.site.site_header = "PreScript"
admin.site.site_title = "PreScript"
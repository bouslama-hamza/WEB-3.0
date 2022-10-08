from django.urls import path 
from . import views

urlpatterns = [
    path('', views.client_index, name='client-index'),
]

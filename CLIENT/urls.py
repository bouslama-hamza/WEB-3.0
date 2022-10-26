from django.urls import path 
from . import views

urlpatterns = [
    path('', views.client_index, name='client-index'),
    path('contact/' , views.client_contact , name='client-contact'),
    path('about/' , views.client_about , name='client-about'),
    path('service/' , views.client_service , name='client-service'),
    path('dashboard/' , views.client_dashboard , name='client-dashboard'),
    path('profile/' , views.client_profile , name='client-profile'),
]

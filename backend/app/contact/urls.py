from django.urls import path
from . import views

app_name = 'contact'

urlpatterns = [
    path('contact/', views.create_contact, name='create_contact'),
]
from django.urls import path
from Login_app import views

urlpatterns = [
    path('', views.index, name='index'),
]

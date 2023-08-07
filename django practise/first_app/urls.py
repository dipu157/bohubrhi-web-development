from django.urls import path
from first_app import views

urlpatterns = [
    path('', views.index, name='index'),
    path('musician/', views.musician_form, name='musician'),
    path('album/', views.album_form, name='album'),
]
from django.urls import path
from App_Login import  views

app_name  = 'App_Login'

urlpatterns = [
    path('signup/', views.sign_up, name='signup'),
    path('login/', views.login_page, name='login'),
    path('profile/', views.profile, name='profile'),
    path('logout/', views.logout_user, name='logout'),
    path('change_profile/', views.user_change, name='change_profile'),
    path('password/', views.pass_change, name='pass_change'),
]
from django.shortcuts import render
from .forms import UserForm,UserInfoForm
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth.decorators import login_required
from django.urls import reverse


def index(request):
    dict = {}
    return render(request, 'Login_app/index.html', context=dict)


def register(request):
    registered = False
    if request.method == 'POST':
        user_form = UserForm(data = request.POST)
        user_info_form = UserInfoForm(data = request.POST)
        if user_form.is_valid() and user_info_form.is_valid():
            user = user_form.save()
            user.set_password(user.password)
            user.save()

            user_info = user_info_form.save(commit=False)
            user_info.user = user

            if 'profile_pic' in request.FILES:
                user_info.profile_pic = request.FILES['profile_pic']

            user_info.save()
            registered = True


    else:
        user_form = UserForm()
        user_info_form = UserInfoForm()

    dict = {'user_form':user_form, 'user_info_form':user_info_form, 'registered':registered}
    return render(request, 'Login_app/register.html', context=dict)

def login_page(request):
    return render(request, 'Login_app/login.html')

def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user:
            if user.is_active:
                login(request, user)
                #return HttpResponseRedirect(reverse('index'))
                return render(request, 'Login_app/index.html')
            else:
                return HttpResponse("Account is not active!")
        else:
            return render('Invalid username or password')
    else:
        return render(request, 'Login_app/login.html',context={'error':'Invalid username or password'})
    

@login_required
def user_logout(request):
    logout(request)
    HttpResponseRedirect(reverse('index'))
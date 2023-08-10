from django.shortcuts import render



def index(request):
    dict = {}
    return render(request, 'Login_app/index.html', context=dict)

from django.shortcuts import render
from first_app import forms


def index(request):
    diction = {'title':"Home Page"}
    return render(request,'first_app/index.html',context=diction)


def album_list(request):
    diction = {'title':"List of Album"}
    return render(request,'first_app/index.html',context=diction)

def musician_form(request):
    diction = {'title':"Add Musician"}
    return render(request,'first_app/musician_form.html',context=diction)

def album_form(request):
    diction = {'title':"Add Album"}
    return render(request,'first_app/album_form.html',context=diction)




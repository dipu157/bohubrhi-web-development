from django.shortcuts import render
from first_app import forms


def form(request):
    new_form = forms.user_form()
    diction = {'test_form' : new_form, 'heading':"This is heading"}
    return render(request, 'first_app/form.html', context=diction)




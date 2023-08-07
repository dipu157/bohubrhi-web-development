from django.shortcuts import render
from first_app import forms


def form(request):
    new_form = forms.user_form()
    diction = {'test_form' : new_form, 'heading':"This is heading"}

    if request.method == 'POST':
        new_form = forms.user_form(request.POST)

        if new_form.is_valid():
            user_name = new_form.cleaned_data['user_name']
            user_dob = new_form.cleaned_data['user_dob']

            diction.update({'user_name':user_name})
            diction.update({'user_dob':user_dob})
            diction.update({'form_submitted':"yes"})

    return render(request, 'first_app/form.html', context=diction)




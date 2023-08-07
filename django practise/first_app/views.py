from django.shortcuts import render
from first_app import forms


def form(request):
    new_form = forms.MusicianForm()
    diction = {'test_form' : new_form, 'heading':"This is heading"}

    if request.method == 'POST':
        new_form = forms.MusicianForm(request.POST)

        if new_form.is_valid():
            new_form.save(commit=True)
            return form(request)

    return render(request, 'first_app/form.html', context=diction)




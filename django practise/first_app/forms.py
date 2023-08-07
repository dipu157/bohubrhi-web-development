from django import forms


class user_form(forms.Form):

    user_name = forms.CharField(label="Full Name",widget=forms.TextInput(attrs={'Placeholder':"Enter Name"}))

    user_dob = forms.DateField(label="Dat of Birth", widget=forms.TextInput(attrs={'type':'date'}))
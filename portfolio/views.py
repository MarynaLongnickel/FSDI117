from django.shortcuts import render


def home_view(request):
    return render(request, 'portfolio/home.html')

def about_me_view(request):
    return render(request, 'portfolio/about_me.html')
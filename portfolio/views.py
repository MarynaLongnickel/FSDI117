from django.shortcuts import render

def about_me_view(request):
    return render(request, 'portfolio/about_me.html')
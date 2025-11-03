from django.urls import path
from portfolio import views

urlpatterns = [
    path('about/', views.about_me_view, name='about_me'),
]
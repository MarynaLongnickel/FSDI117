from django.urls import path
from portfolio import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('about/', views.about_me_view, name='about_me'),
]
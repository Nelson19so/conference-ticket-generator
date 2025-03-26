from django.urls import path
from . import views

urlpatterns = [
  path('', views.ticket_form, name='ticket_form'),
  path('<int:pk>/', views.ticket, name='ticket'),
]
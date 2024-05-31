from django.urls import path
from .views import indexView, textoMorse, nroBinario
urlpatterns = [
    path('', indexView, name="index"),
    path('morse', textoMorse, name="morse"),
    path('binario', nroBinario, name="binario"),

]

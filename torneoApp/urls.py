from django.urls import path
from .views import indexView, textoMorse, nroBinario, morseTexto
urlpatterns = [
    path('', indexView, name="index"),
    path('morse', textoMorse, name="morse"),
    path('binario', nroBinario, name="binario"),
    path('morse2', morseTexto, name="morse2"),
    

]

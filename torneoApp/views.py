from django.shortcuts import render

# Create your views here.

def indexView(request):    
    return render(request, 'index.html')

def textoMorse(request):    
    return render(request, 'texto_morse.html')

def morseTexto(request):    
    return render(request, 'texto_morse_2.html')

def nroBinario(request):    
    return render(request, 'numero_binario.html')


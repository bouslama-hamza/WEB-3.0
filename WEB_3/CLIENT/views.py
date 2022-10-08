from django.shortcuts import render

# Create your views here.
def client_index(request):
    return render(request, 'client_index.html')
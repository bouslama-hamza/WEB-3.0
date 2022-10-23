from django.shortcuts import render

# Create your views here.
def client_index(request):
    return render(request, 'HomePage/client_index.html')

def client_contact(request):
    return render(request , 'HomePage/client_contact.html')

def client_about(request):
    return render(request , 'HomePage/client_about.html')

def client_service(request):
    return render(request , 'HomePage/client_service.html')

def client_dashboard(request):
    return render(request , 'AppPage/client_dashboard.html')
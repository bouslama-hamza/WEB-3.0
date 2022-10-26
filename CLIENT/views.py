from django.shortcuts import render

def client_index(request):
    return render(request, 
        'HomePage/client_index.html',
        {'title': 'Home Page'})

def client_contact(request):
    return render(request , 
        'HomePage/client_contact.html',
        {'title': 'Contact Us'})

def client_about(request):
    return render(request , 
        'HomePage/client_about.html'
        ,{'title': 'About Us'})

def client_service(request):
    return render(request , 
        'HomePage/client_service.html'
        ,{'title': 'Services'})

def client_dashboard(request):
    return render(request , 
        'AppPage/client_dashboard.html'
        ,{'title': 'Dashboard'})

def client_profile(request):
    return render(request , 
        'AppPage/client_profile.html'
        ,{'title': 'Profile'})

def client_transaction(request):
    return render(request , 
        'AppPage/client_transaction.html'
        ,{'title': 'Transaction'})
from django.shortcuts import redirect
from django.urls import reverse

def is_ajax(request):
    return request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest'
    
def authorization(view_func) :
    def wrapper_func(request ,*args, **kwargs):
        if request.method == 'GET':
            if request.GET.get("nick_name", None) == None:
                print("aaaabbbb",request.GET.get("nick_name", None))
                return redirect(reverse('client-index'))
            else:
                print(request.GET.get("nick_name", None) )
                return view_func(request, *args, **kwargs)

    return wrapper_func


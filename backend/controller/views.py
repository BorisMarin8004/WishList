from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt
from .view_manager import *
from .serializer import *
from .models import *


@csrf_exempt
def signUpView(request):
    body = get_body(request)
    User.objects.create_user(**body)
    return get_response(body, status=200)


class ItemsView(DataAccessView):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()
    model = Item


class WishListView(DataAccessView):
    serializer_class = WishListSerializer
    queryset = WishList.objects.all()
    model = WishList


class UserView(DataAccessView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    model = User

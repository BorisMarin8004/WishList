from django.contrib.auth import authenticate, login
from django.db.utils import IntegrityError
from django.views.decorators.csrf import csrf_exempt
from .view_manager import *
from .serializer import *
from .models import *


@csrf_exempt
def signUpView(request):
    try:
        body = get_body(request)
        User.objects.create_user(**body)
        status = 200
    except IntegrityError as e:
        body = {"error": str(e)}
        status = 400
    return get_response(body, status=status)


class ItemsView(DataAccessView):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()
    model = Item

    def delete_models(self, *args, **kwargs):
        delete_targets = self.model.objects.filter(**self.request.data)
        print(delete_targets)
        data = self.filter_models(**self.request.data)
        print(data)
        return get_response(data, status=200)
        # return super().delete_models(self, args, kwargs)


class WishListView(DataAccessView):
    serializer_class = WishListSerializer
    queryset = WishList.objects.all()
    model = WishList


class UserView(DataAccessView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    model = User

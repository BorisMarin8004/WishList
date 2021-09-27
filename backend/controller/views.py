from django.http import HttpResponse
from rest_framework import viewsets
from django.core.exceptions import FieldError
from .serializer import *
from .models import *


class ItemsView(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()

    @staticmethod
    def delete(request):
        json_data = list(map(
            lambda item: dict(ItemSerializer().to_representation(item)),
            Item.objects.filter(**request.data)
        ))
        if json_data:
            Item.objects.filter(**request.data).delete()
            status = 200
        else:
            status = 400
        return HttpResponse(json.dumps(json_data), headers={"Content-Type": "application/json"}, status=status)


class WishListView(viewsets.ModelViewSet):
    serializer_class = WishListSerializer
    queryset = WishList.objects.all()

    @staticmethod
    def delete(request):
        try:
            json_data = list(map(
                lambda wish_list: dict(WishListSerializer().to_representation(wish_list)),
                WishList.objects.filter(**request.data)
            ))
            if json_data:
                WishList.objects.filter(**request.data).delete()
                status = 200
            else:
                status = 400
        except FieldError:
            json_data = {"error": FieldError.__name__}
            print(json_data)
            status = 400
        return HttpResponse(json.dumps(json_data), headers={"Content-Type": "application/json"}, status=status)


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    @staticmethod
    def delete(request):
        json_data = list(map(
            lambda user: dict(UserSerializer().to_representation(user)),
            User.objects.filter(**request.data)
        ))
        if json_data:
            print(User.objects.filter(**request.data))
            User.objects.filter(**request.data).delete()
            status = 200
        else:
            status = 400
        return HttpResponse(json.dumps(json_data), headers={"Content-Type": "application/json"}, status=status)

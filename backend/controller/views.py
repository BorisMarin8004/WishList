from rest_framework.views import APIView
from rest_framework.response import Response
from . serializer import *


class ReactView(APIView):

    serializer_class = ItemSerializer

    @staticmethod
    def get(request):
        # fire_base = FireBase.get_fire_base()
        # project_name = {"project_name": fire_base.db.child('project_name').get()}
        items = [{"name": item.name, "price": item.price} for item in Item.objects.all()]
        return Response(items)

    @staticmethod
    def post(request):
        serializer = ItemSerializer(data={"name": "testName", "price": "123"})
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

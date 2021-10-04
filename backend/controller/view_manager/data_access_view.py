from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.core.exceptions import FieldError
from rest_framework import viewsets, mixins
from .view_utils import *


class DataAccessView(mixins.CreateModelMixin,
                     mixins.RetrieveModelMixin,
                     mixins.UpdateModelMixin,
                     mixins.DestroyModelMixin,
                     viewsets.GenericViewSet):
    serializer_class = None
    queryset = None
    authentication_classes = [TokenAuthentication, ]
    permission_classes = [IsAuthenticated, ]
    model = None
    url_conf = {
        "get": "get_models",
        "post": "add_models",
        "delete": "delete_models"
    }

    @classmethod
    def as_view(cls, actions=None, **kwargs):
        return super().as_view(cls.url_conf)

    def filter_models(self, **filter_params):
        return list(map(
            lambda item: dict(self.get_serializer().to_representation(item)),
            self.model.objects.filter(**filter_params)
        ))

    def parse_query_params(self):
        def parse_query_param(param):
            if len(param) > 1:
                raise ValueError("Feature is not supported, please pass one argument per field.")
            else:
                return param[0]
        return {k: parse_query_param(v) for k, v in dict(self.request.query_params).items()}

    def get_models(self, *args, **kwargs):
        try:
            data = self.filter_models(**self.parse_query_params())
            res = get_response(data, status=200)
        except (TypeError, FieldError, ValueError) as e:
            data = {"error": str(e)}
            res = get_response(data, status=400)
        return res

    def add_models(self, *args, **kwargs):
        try:
            data = self.create(self.request).data
            res = get_response(data, status=200)
        except (FieldError, ValueError) as e:
            data = {"error": str(e)}
            res = get_response(data, status=400)
        return res

    def delete_models(self, *args, **kwargs):
        try:
            data = self.filter_models(**self.request.data)
            self.model.objects.filter(**self.request.data).delete()
            res = get_response(data, status=200)
        except FieldError as e:
            data = {"error": str(e)}
            res = get_response(data, status=400)
        return res

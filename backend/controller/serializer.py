from rest_framework import serializers
from .models import *


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'price', 'name', 'url', 'description']


class WishListSerializer(serializers.ModelSerializer):
    class Meta:
        model = WishList
        fields = ['id', 'user_id', 'item_ids']

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        is_list_view = isinstance(instance.item_ids, str)
        extra_ret = {'item_ids': list(map(int, instance.item_ids.split(",")))} if is_list_view else {'item_ids': instance.item_ids}
        ret.update(extra_ret)
        return ret


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'date_joined',
            'email',
            'first_name',
            'id',
            'is_active',
            'is_staff',
            'is_superuser',
            'last_login',
            'last_name',
            'password',
            'username'
        ]

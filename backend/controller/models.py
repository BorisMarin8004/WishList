import json
from django.db import models
from django.contrib.auth.models import User


class WishList(models.Model):
    class Meta:
        db_table = "wish_lists"

    user_id = models.ForeignKey(User, on_delete=models.CASCADE, db_column='user_id')
    name = models.CharField(default="No Title", db_column='name', max_length=20)


class Item(models.Model):
    class Meta:
        db_table = "items"

    name = models.CharField(max_length=20, db_column='name')
    wish_list_id = models.ForeignKey(WishList, on_delete=models.CASCADE, db_column='wish_list_id')
    url = models.CharField(default="No URL", max_length=20, db_column='url')
    price = models.DecimalField(default=0, decimal_places=2, max_digits=1000, db_column='price')
    description = models.TextField(default="Empty", db_column='description')

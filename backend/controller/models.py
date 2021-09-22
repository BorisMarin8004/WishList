from django.db import models


class Item(models.Model):
    class Meta:
        db_table = "items"
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=20)
    price = models.CharField(max_length=20)

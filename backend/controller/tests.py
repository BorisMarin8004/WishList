from django.test import TestCase
from django.urls import reverse
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient
from .models import *
from .tests_manager import *


class LoginViewTest(TestCase):
    credentials = {
        'username': 'admin',
        'password': 'admin'
    }
    user = User.objects.get(username=credentials["username"])

    def test_login(self):
        response = self.client.post(reverse('login'), data=LoginViewTest.credentials, follow=True)
        self.assertTrue("token" in decode_content(response.content))
        self.assertTrue(LoginViewTest.user.is_authenticated)
        self.assertEqual(response.status_code, 200)


class ItemsViewTest(TestCase, DAVTestTemplate):
    add_data = {
        "name": "AutoTestItem"
    }
    delete_data = add_data
    url_name = "item"
    field_compare = "name"
    client_class = DAVTestTemplate.client_class

    @classmethod
    def setUpTestData(cls):
        DAVTestTemplate.setUpTestData(cls)

    def test_get_items(self):
        super()._test_get(self)

    def test_add_items(self):
        super()._test_add(self)

    def test_delete_items(self):
        super()._test_delete(self)


class WishListViewTest(TestCase, DAVTestTemplate):
    add_data = {
        "user_id": 21,
        "item_ids": "4,6"
    }
    delete_data = add_data
    url_name = "wish_list"
    field_compare = "user_id"
    client_class = DAVTestTemplate.client_class

    @classmethod
    def setUpTestData(cls):
        DAVTestTemplate.setUpTestData(cls)

    def test_get_wish_list(self):
        super()._test_get(self)

    def test_add_wish_list(self):
        super()._test_add(self)

    def test_delete_wish_list(self):
        super()._test_delete(self)


class UserViewTest(TestCase, DAVTestTemplate):
    add_data = {
        "username": "AutoTestUserUsername",
        "password": "ThePasswordOfUserThatIsUserForTests"
    }
    delete_data = {
        "username": "AutoTestUserUsername"
    }
    url_name = "user"
    field_compare = "username"
    client_class = DAVTestTemplate.client_class

    @classmethod
    def setUpTestData(cls):
        DAVTestTemplate.setUpTestData(cls)

    def test_get_user(self):
        super()._test_get(self)

    def test_add_user(self):
        super()._test_add(self)

    def test_delete_user(self):
        super()._test_delete(self)

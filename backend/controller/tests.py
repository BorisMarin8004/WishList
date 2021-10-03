from django.test import TestCase
from django.urls import reverse
from .models import *


class LoginViewTest(TestCase):
    credentials = {
        'username': 'boris',
        'password': 'pbkdf2_sha256$260000$kPfVkANN3aEaXoKlEuy2xP$cmhylIY3Vn4+2OJZdUtmpTWxqDy7XRFGPlzriHVJ5vg='
    }
    user = User.objects.get(**credentials)

    def test_login(self):
        response = self.client.post(reverse('login'), data=LoginViewTest.credentials, follow=True)
        print(response.content)
        self.assertTrue(LoginViewTest.user.is_authenticated)
        self.assertEqual(response.status_code, 200)


class ItemsViewTest(TestCase):
    def test_get_items(self):
        response = self.client.get(reverse('item'))
        print(response)
        self.assertEqual(response.status_code, 200)
        self.assertTrue(len(response.data[0]) > 0)

    def test_add_items(self):
        response = self.client.get(reverse('item'))
        self.assertEqual(response.status_code, 200)

    def test_delete_items(self):
        response = self.client.get(reverse('item'))
        self.assertEqual(response.status_code, 200)

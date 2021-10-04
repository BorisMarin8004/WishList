"""WishList URL Configuration

The `urlpatterns` list view_managers URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from controller.views import *

urlpatterns = [
    path('admin/', admin.site.urls, name="admin"),
    path('login/', obtain_auth_token, name="login"),
    path('sign_up/', signUpView, name="sign_up"),
    path('api/', include([
        path('item/', ItemsView.as_view(), name="item"),
        path('wish_list/', WishListView.as_view(), name="wish_list"),
        path('user/', UserView.as_view(), name="user")
    ]))
]

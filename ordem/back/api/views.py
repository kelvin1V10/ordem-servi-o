# api/views.py

from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User, Group
from rest_framework.permissions import AllowAny
from rest_framework.generics import ListCreateAPIView
from .serializers import *

class CreateUserView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenBlacklistView
)
from .views import *


urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='signin'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('users', CreateUserView.as_view())
   
    
]

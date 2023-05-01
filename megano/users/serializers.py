from rest_framework import serializers
from .models import User


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['fio', 'phone', 'email', 'image']


class ProfileAvatarSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['image']


class UserPasswordChangeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['password']
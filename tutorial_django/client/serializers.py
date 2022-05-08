from rest_framework import serializers
from .models import Client
from team.serializers import UserSerializer


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        read_only_fields = (
            'created_by',
            'created_at',
            'modified_at',
        )
        fields = (
            'id',
            'name',
            'contact_person',
            'email',
            'phone',
            'website',
            'created_at',
            'modified_at',
        )


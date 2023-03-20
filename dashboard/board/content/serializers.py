from rest_framework import serializers

from content.models import Notes


class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = '__all__'

    def create(self, validated_data):
        return Notes.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.save()
        return instance


class EmployeesSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    employee = serializers.CharField(max_length=255)
    phone = serializers.IntegerField()


class SidebarSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=255)
    image = serializers.ImageField()
from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['name', 'phone', 'email', 'job', 'message']
        
    def validate_phone(self, value):
        import re
        if not re.match(r'^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$', value):
            raise serializers.ValidationError("올바른 전화번호 형식이 아닙니다. (예: 010-1234-5678)")
        return value
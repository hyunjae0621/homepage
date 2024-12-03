from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ContactSerializer

@api_view(['POST'])
def create_contact(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({
            'message': '문의가 성공적으로 접수되었습니다.',
            'data': serializer.data
        }, status=status.HTTP_201_CREATED)
    return Response({
        'message': '입력 데이터가 올바르지 않습니다.',
        'errors': serializer.errors
    }, status=status.HTTP_400_BAD_REQUEST)
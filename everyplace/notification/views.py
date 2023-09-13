from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .models import Notification
from .serializers import NotificationSerializer


# 알림 목록 조회
class NotificationList(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user

        # 모든 알림 목록
        all_notifications = Notification.objects.filter(
            receiver=user, is_deleted=False)
        serializer = NotificationSerializer(all_notifications, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

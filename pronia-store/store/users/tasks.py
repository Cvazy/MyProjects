import uuid
from celery import shared_task
from datetime import timedelta

from .models import *


@shared_task()
def send_email_verifications(user_id):
    user = User.objects.get(id=user_id)
    expiration = now() + timedelta(hours=1)
    record = EmailVerification.objects.create(code=uuid.uuid4(), user=user, expiration=expiration)
    record.send_verification_email()

from django.db import models

class Contact(models.Model):
    JOB_CHOICES = [
        ('influencer', '인플루언서'),
        ('business', '1인 사업'),
        ('instructor', '1인 강사'),
        ('freelancer', '프리랜서'),
        ('artist', '예체능'),
        ('other', '기타')
    ]

    name = models.CharField(max_length=100, verbose_name='이름')
    phone = models.CharField(max_length=20, verbose_name='연락처')
    email = models.EmailField(verbose_name='이메일')
    job = models.CharField(max_length=20, choices=JOB_CHOICES, verbose_name='직업')
    message = models.TextField(verbose_name='문의사항')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='생성일')

    class Meta:
        verbose_name = '문의'
        verbose_name_plural = '문의 목록'
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.created_at.strftime('%Y-%m-%d %H:%M')}"
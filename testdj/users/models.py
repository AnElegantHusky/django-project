from django.db import models

# Create your models here.


class Comment(models.Model):
    #user = models.CharField(max_length=64)
    #date = models.DateField()
    star = models.IntegerField(default=0)

    reason_1 = models.TextField(default=False)
    reason_2 = models.TextField(default=False)
    reason_3 = models.TextField(default=False)
    reason_4 = models.TextField(default=False)
    reason_5 = models.TextField(default=False)
    reason_6 = models.TextField(default=False)

    context = models.TextField()


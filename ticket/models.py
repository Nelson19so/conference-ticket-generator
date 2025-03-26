from django.db import models

# Create your models here.

class Ticket(models.Model):
  avatar = models.ImageField(upload_to="avatar/%Y/%m/%d/", blank=True, null=True)
  username = models.CharField(max_length=200, unique=True)
  email = models.EmailField(max_length=200, unique=True)
  github = models.CharField(max_length=200, unique=True)
  uuid = models.IntegerField(unique=True)

  def __str__(self):
    return self.username
from django.db import models


class Notes(models.Model):
    content = models.TextField("Контент")

    def __str__(self):
        return self.content
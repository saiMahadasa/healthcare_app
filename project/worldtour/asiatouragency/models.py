from django.db import models

# Create your models here.
class Tour(models.Model):
    destination_country = models.CharField(max_length=64)
    origin_country = models.CharField(max_length=64)
    number_of_nights = models.IntegerField()
    price  = models.IntegerField()
    
    def __str__(self):
        return f'The {self.id} from {self.origin_country} to {self.destination_country} for {self.number_of_nights} is {self.price}'

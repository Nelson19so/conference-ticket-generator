from django import forms
from .models import Ticket

class TicketForm(forms.ModelForm):

  class Meta:
    model = Ticket
    fields = ('avatar', 'username', 'email', 'github', 'uuid')
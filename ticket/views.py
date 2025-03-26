from django.shortcuts import render
from .models import Ticket
from .forms import TicketForm
from django.shortcuts import redirect

# Create your views here.

# ticket form submit
def ticket_form(request):
  if request.method == "POST":
    form = TicketForm(request.POST, request.FILES)
    print(request.POST)

    if form.is_valid():
      ticket = Ticket(
        avatar = form.cleaned_data["avatar"],
        username = form.cleaned_data["username"],
        email = form.cleaned_data["email"],
        github = form.cleaned_data["github"],
        uuid = form.cleaned_data["uuid"],
      )

      ticket.save()
      return redirect('ticket', pk=ticket.pk)
    
    else:
      print("somthing went wrong")
    
  else:
    form = TicketForm()

  return render(request, 'ticket/index.html')


# getting ticket id's for users 
def ticket(request, pk):
  ticket = Ticket.objects.get(pk=pk)
  return render(request, 'ticket/ticket.html', {'ticket':ticket})
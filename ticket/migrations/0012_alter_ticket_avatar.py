# Generated by Django 5.1.4 on 2025-02-20 07:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticket', '0011_ticket_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ticket',
            name='avatar',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]

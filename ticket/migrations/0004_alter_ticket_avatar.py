# Generated by Django 5.1.4 on 2025-02-19 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticket', '0003_alter_ticket_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ticket',
            name='avatar',
            field=models.ImageField(default='', upload_to=''),
        ),
    ]

# Generated by Django 4.0.3 on 2022-04-30 21:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_note_email_alter_note_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='email',
            field=models.EmailField(default='admin@prescript.com', max_length=225),
        ),
    ]

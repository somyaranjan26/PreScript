# Generated by Django 4.0.3 on 2022-05-05 16:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_alter_note_recommendations'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='recommendations',
            field=models.JSONField(default={}, null=True, verbose_name='recommendations'),
        ),
    ]

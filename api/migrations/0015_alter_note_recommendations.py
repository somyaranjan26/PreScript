# Generated by Django 4.0.3 on 2022-05-05 16:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_alter_note_recommendations'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='recommendations',
            field=models.JSONField(default='"recommendations"', null=True),
        ),
    ]

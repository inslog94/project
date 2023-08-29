# Generated by Django 4.2.4 on 2023-08-28 01:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pin', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='pin',
            name='menu',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='pin',
            name='thumbnail_img',
            field=models.CharField(blank=True, max_length=150),
        ),
        migrations.AlterField(
            model_name='pin',
            name='category',
            field=models.CharField(max_length=50),
        ),
        migrations.DeleteModel(
            name='Category',
        ),
    ]
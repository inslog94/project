# Generated by Django 4.2.4 on 2023-08-28 06:06

from django.db import migrations, models
import user.models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile_img',
            field=models.ImageField(blank=True, default=1, upload_to=user.models.profile_img_upload_path),
            preserve_default=False,
        ),
    ]

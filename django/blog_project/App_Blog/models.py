from django.db import models
from django.contrib.auth.models import User


class Blog(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='post_author')
    blog_title = models.CharField(max_length=200, verbose_name="Blog Title")
    blog_content = models.TextField(verbose_name="Blog Content")
    slug = models.SlugField(max_length=364, unique=True)
    blog_image = models.ImageField(upload_to='blog_images', verbose_name="Image")
    publish_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.blog_title
    

class Comment(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, related_name='blog_comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_comments')
    comment = models.TextField()
    comment_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.comment
    
class Likes(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, related_name='blog_likes')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_likes')
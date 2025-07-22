from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    #password should not to be set, post request
    password = serializers.CharField(write_only=True, min_length=8, style={'input_type': 'password'})
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

        def create(self, validated_data):
            #creating new user in the database
            # User.objects.create = save the password in a plain text, you need to hash the pass
            # User.objects.create_user = automatic hash the password
            user = User.objects.create_user(
                #you can use (**validated_data) to pass the three above
                validated_data['username'],
                validated_data['email'],
                validated_data['password']
            )
            #user = User.objects.create_user(**validated_data)
            return user
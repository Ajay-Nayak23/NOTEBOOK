from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .utils import getNotesList, getNoteDetail, createNote, updateNote , deleteNote 

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id/',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Updates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes an existing note'
        },
    ]
    return Response(routes)

@api_view(['GET', 'POST'])
def getNotes(request):
    if request.method == 'GET':
        return getNotesList(request)
    if request.method == 'POST':
        return createNote(request)

@api_view(['GET', 'PUT', 'DELETE'])
def getNote(request, pk):
    if request.method == 'GET':
        return getNoteDetail(request, pk)
    if request.method == 'PUT':
        return updateNote(request, pk)
    if request.method == 'DELETE':
        return deleteNote(request, pk)
 

# from django.http import response
# from django.shortcuts import render
# from rest_framework.response import Response
# from rest_framework.decorators import api_view
# from rest_framework.serializers import Serializer
# from .models import Note
# from .serializers import NoteSerializer
# from api import serializers
# from .utils import updateNote, getNoteDetail, deleteNote, getNotesList, createNote
# # Create your views here.


# @api_view(['GET'])
# def getRoutes(request):

#     routes = [
#         {
#             'Endpoint': '/notes/',
#             'method': 'GET',
#             'body': None,
#             'description': 'Returns an array of notes'
#         },
#         {
#             'Endpoint': '/notes/id',
#             'method': 'GET',
#             'body': None,
#             'description': 'Returns a single note object'
#         },
#         {
#             'Endpoint': '/notes/create/',
#             'method': 'POST',
#             'body': {'body': ""},
#             'description': 'Creates new note with data sent in post request'
#         },
#         {
#             'Endpoint': '/notes/id/update/',
#             'method': 'PUT',
#             'body': {'body': ""},
#             'description': 'Creates an existing note with data sent in post request'
#         },
#         {
#             'Endpoint': '/notes/id/delete/',
#             'method': 'DELETE',
#             'body': None,
#             'description': 'Deletes and exiting note'
#         },
#     ]
#     return Response(routes)


# # /notes GET
# # /notes POST
# # /notes/<id> GET
# # /notes/<id> PUT
# # /notes/<id> DELETE

# @api_view(['GET', 'POST'])
# def getNotes(request):

#     if request.method == 'GET':
#         return getNotesList(request)

#     if request.method == 'POST':
#         return createNote(request)


# @api_view(['GET', 'PUT', 'DELETE'])
# def getNote(request, pk):

#     if request.method == 'GET':
#         return getNoteDetail(request, pk)

#     if request.method == 'PUT':
#         return updateNote(request, pk)

#     if request.method == 'DELETE':
#         return deleteNote(request, pk)


# @api_view(['POST'])
# def createNote(request):
#     data = request.data
#     note = Note.objects.create(
#         body=data['body']
#     )
#     serializer = NoteSerializer(note, many=False)
#     return Response(serializer.data)


# @api_view(['PUT'])
# def updateNote(request, pk):
#     data = request.data
#     note = Note.objects.get(id=pk)
#     serializer = NoteSerializer(instance=note, data=data)

#     if serializer.is_valid():
#         serializer.save()

#     return Response(serializer.data)


# @api_view(['DELETE'])
# def deleteNote(request, pk):
#     note = Note.objects.get(id=pk)
#     note.delete()
#     return Response('Note was deleted!')






# from django.shortcuts import render 
# from  rest_framework.response import Response
# from rest_framework.decorators import api_view
# from .models import Note
# from .serializers import NoteSerializer

# # Create your views here.
# @api_view(['GET'])
# def getRoutes(request): 
     
#     routes = [
#         {
#             'Endpoint': '/notes/',
#             'method': 'GET',
#             'body': None,
#             'description': 'Returns an array of notes'
#         },
#         {
#             'Endpoint': '/notes/id',
#             'method': 'GET',
#             'body': None,
#             'description': 'Returns a single note object'
#         },
#         {
#             'Endpoint': '/notes/create/',
#             'method': 'POST',
#             'body': {'body': ""},
#             'description': 'Creates new note with data sent in post request'
#         },
#         {
#             'Endpoint': '/notes/id/update/',
#             'method': 'PUT',
#             'body': {'body': ""},
#             'description': 'Creates an existing note with data sent in post request'
#         },
#         {
#             'Endpoint': '/notes/id/delete/',
#             'method': 'DELETE',
#             'body': None,
#             'description': 'Deletes and exiting note'
#         },
#     ]
#     return Response(routes)

# @api_view(['GET'])
# def getNotes(request):
#     notes=Note.objects.all().order_by('-updated')
#     serializer= NoteSerializer(notes,many=True)
#     return Response(serializer.data)

# @api_view(['GET'])
# def getNote(request,pk):
#     notes=Note.objects.get(id=pk)
#     serializer= NoteSerializer(notes,many=False)
#     return Response(serializer.data)


# @api_view(['PUT'])
# def updateNote(request,pk):
#     data=request.data
#     note=Note.objects.get(id=pk)
#     serializer=NoteSerializer(instance=note ,data=data)

#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)
    
# @api_view(['POST'])
# def createNote(request):
#     data=request.data
#     note=Note.objects.create(
#         body=data['body']
#     )
#     serializer=NoteSerializer(note ,many=False)
#     return Response(serializer.data)  

# @api_view(['DELETE'])
# def deleteNote(request,pk):
#     note=Note.objects.get(id=pk)
#     note.delete()
#     return Response('Note was deleted!')
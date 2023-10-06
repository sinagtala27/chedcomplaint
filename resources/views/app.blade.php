<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" value="{{ csrf_token() }}"/>
        <title>CHED HOTLINE PORTAL </title>
        <link href="{{ asset('css/app.css') }}" type="text/css" rel="stylesheet"/>
    </head>
    <body>
        <div id="app">
        </div>
        <script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
    </body>
</html>
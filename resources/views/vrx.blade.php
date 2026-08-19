<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <title>Bynnas — IT Solutions</title>
        <style>
            html, body, #root { margin: 0; min-height: 100%; background: #ffffff; color: #111827; font-family: 'DM Sans', system-ui, sans-serif; }
            .boot { padding: 48px 24px; text-align: center; letter-spacing: .1em; font-weight: 700; }
        </style>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@500;600&display=swap" rel="stylesheet">
        @php
            $manifestPath = public_path('build/manifest.json');
            $manifest = file_exists($manifestPath) ? json_decode(file_get_contents($manifestPath), true) : [];
            $entry = $manifest['resources/js/vrx/main.jsx'] ?? null;
        @endphp
        @if ($entry)
            @foreach ($entry['css'] ?? [] as $css)
                <link rel="stylesheet" href="build/{{ $css }}">
            @endforeach
        @endif
    </head>
    <body>
        <div id="root"><p class="boot">BYNNAS</p></div>
        @if ($entry)
            <script type="module" src="build/{{ $entry['file'] }}"></script>
        @else
            <p class="boot">Build missing. Run npm run build.</p>
        @endif
    </body>
</html>

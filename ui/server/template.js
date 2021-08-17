import serialize from 'serialize-javascript';

export default function template(body, initialData, userData) {
  return `<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
  <title>nuHabit</title>
  <link rel="stylesheet" type="text/css" href="/bootstrap/dist/css/bootstrap.min.css">
  <link src="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
  rel="stylesheet" type="text/css">
  <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico'/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
  <!-- Page generated from template. -->
  <div id="content">${body}</div>
  <script>
    window.__INITIAL_DATA__ = ${serialize(initialData)}
    window.__USER_DATA__ = ${serialize(userData)} 
  </script>

  <script src="/env.js"></script>
  <script src="/vendor.bundle.js"></script>
  <script src="/app.bundle.js"></script>
</body>

</html>
`;
}

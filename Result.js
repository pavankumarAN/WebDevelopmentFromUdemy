< !DOCTYPE html >
    <html>
        <body>

            <h2>JavaScript Functions</h2>

            <p>Global functions automatically become window methods. Invocing myFunction() is the same as invocong window.myFunction().</p>

            <p id="demo"></p>

            <script>
                function myFunction(a, b) {
    return a * b;
            }
            document.getElementById("demo").innerHTML = window.myFunction(10, 2);
</script>

        </body>
    </html>



<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function Sequence</h2>

<p>JavaScript functions are executed in the sequence they are called.</p>

<p id="demo"></p>

<script>
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();
</script>

</body>
</html>


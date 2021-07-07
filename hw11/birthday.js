<script>
    function getAge()
    { 
    var bday = document.getElementById("bday").value.split("-");
    var d1 = new Date(bday[0], bday[1]-1, bday[2]);
    var d2 = new Date();

    var age = d2.getFullYear() - d1.bday[0];
    var lifedays = (d2.getTime() - d1.getTime())/(1000*60*60*24);
    } 
    documnet.getElementById("lifedays").innerHTML = lifedays;
    document.getElementById("age").innerHTML = age;
</script>
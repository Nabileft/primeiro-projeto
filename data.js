function func() {
    var myname = document.getElementById("nama").value.toLowerCase();
    var mydate = document.getElementById("tanggal").value;

    var expectedDate = "2024-08-10"; // Ganti dengan tanggal yang diharapkan

    if (mydate === expectedDate) {
        localStorage.setItem("name", myname); // Simpan nama di localStorage
        window.location.assign("next.html");
    } else {
        alert("wrong number or date");
    }
}

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let course = document.getElementById("course").value;

    if (name === "" || email === "" || course === "") {
        alert("íÑÌì ÊÚÈÆÉ ÌãíÚ ÇáÍŞæá.");
        return false;
    }

    alert("Êã ÇáÊÓÌíá ÈäÌÇÍ!");
    return true;
}

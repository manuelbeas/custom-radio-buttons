document.querySelectorAll('.custom-radio-btn').forEach(element => {
    if (element.childNodes[1].checked) {
        element.style.borderColor = "#545454"
            // ----------------------
            // remove all this code if you dont want tu set a body's color/background image 
            // ----------------------
        if (element.getAttribute("data-image")) {
            document.getElementById('i-want-a-background').style.backgroundImage = "url('" + element.getAttribute("data-image") + "')"
        } else if (element.getAttribute("data-color")) {
            console.log(element.getAttribute("data-color"))
            document.getElementById('i-want-a-background').style.backgroundColor = element.getAttribute("data-color")
        } else {
            document.getElementById('i-want-a-background').style.backgroundColor = "black"
        }
        // ----------//----------
        // ----------//----------

    }

    element.style.width = element.getAttribute("data-width") + "px"
    element.style.height = element.getAttribute("data-height") + "px"

    if (element.getAttribute("data-image")) {
        element.childNodes[3].style.backgroundImage = "url('" + element.getAttribute("data-image") + "')"
    } else if (element.getAttribute("data-color")) {
        element.childNodes[3].style.backgroundColor = element.getAttribute("data-color")
    } else {
        element.childNodes[3].style.backgroundColor = "black"
    }

});


elements = document.querySelectorAll('.custom-radio-btn')
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('change', function() {
        for (var o = 0; o < elements.length; o++) {
            elements[o].style.borderColor = "transparent"
        }
        if (this.childNodes[1].checked) {
            this.style.borderColor = "#545454"

            // ----------------------
            // remove all this code if you dont want tu set a body's color/background image 
            // ----------------------
            if (this.getAttribute("data-image")) {
                document.getElementById('i-want-a-background').style.backgroundColor = ""
                document.getElementById('i-want-a-background').style.backgroundImage = "url('" + this.getAttribute("data-image") + "')"
            } else if (this.getAttribute("data-color")) {
                console.log(this.getAttribute("data-color"))
                document.getElementById('i-want-a-background').style.backgroundImage = ""
                document.getElementById('i-want-a-background').style.backgroundColor = this.getAttribute("data-color")
            } else {
                document.getElementById('i-want-a-background').style.backgroundColor = "black"
            }
            // ----------//----------
            // ----------//----------

        }
    }, false);
}
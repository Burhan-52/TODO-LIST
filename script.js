
function add() {

    name = document.getElementById('name').value;

    if (name == "") {
        document.getElementById('error').innerHTML = "please fill"

    }

    else {
        document.getElementById('error').innerHTML = ""
        line = document.getElementById('ul')
        ul = document.getElementById('ul')
        li = document.createElement("li");
        li.textContent = name;
        li.className = "li"
        line.appendChild(li)

        let pos = line.firstElementChild
        if (pos == null) {
            line.appendChild(li)

        }
        else {
            line.insertBefore(li, pos)
        }

        myspan = document.createElement('span');
        myspan.innerHTML = 'x';
        myspan.className = 'span'
        li.appendChild(myspan)

    }

    name = document.getElementById('name').value = "";

}

let btn1 = document.querySelector('ul')
btn1.addEventListener('click', function (e) {
        line = document.getElementById('ul')
        li = e.target.parentNode;
        line.removeChild(li)
})
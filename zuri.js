const cases = document.getElementsByClassName('case');

for(i = 0; i < cases.length; i++) {

    cases[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })

}
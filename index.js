const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    const radio = box.querySelector('input');
    const content = box.querySelector('box-content');

    radio.addEventListener('change', function(){
        if(this.checked){
            boxes.forEach(otherBox => {
                if(otherBox !== box){
                    if(!otherBox.querySelector('.box-content').classList.contains('none')){
                        otherBox.querySelector('.box-content').classList.add('none');
                        otherBox.querySelector('.box-content').classList.remove('flex');
                        // if(otherBox.querySelector('.tag')){
                        //     otherBox.querySelector('.tag').classList.remove('none');
                        //     otherBox.querySelector('.tag').classList.add('flex');
                        // }
                        otherBox.classList.remove('box-focus');
                    }
                }
            })
        }
        box.querySelector('.box-content').classList.remove('none');
        box.querySelector('.box-content').classList.add('flex');
        // if(box.querySelector('.tag')){
        //     box.querySelector('.tag').classList.add('none');
        //     box.querySelector('.tag').classList.remove('flex');
        // }
        box.classList.add('box-focus');
    });

    box.addEventListener('click', function(event) {
        const radioInput = this.querySelector('input[type="radio"]');
        
        if (radioInput) {
            radioInput.checked = true;
            radioInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });

})
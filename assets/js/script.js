var toggle = 0;
//show event
showContent = function(id, tog__value){
    
    if(id === '1' && tog__value === '0'){
        const content = document.getElementById('about__js');
        content.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        content.style.display = 'unset';
        console.log(tog__value);
        document.getElementById('tog__value').value = '1';
       
    }
    if(id === '1' && tog__value === '1'){
        const content = document.getElementById('about__js');
        // content.innerHTML = 'Hello';
        content.style.display = 'none';
        console.log(tog__value);
        document.getElementById('tog__value').value = '0';
    }
    if(id === '2' && tog__value === '0'){
        const content = document.getElementById('sns__js');
        content.innerHTML = 'Hello1';
        content.style.display = 'unset';
        console.log(tog__value);
        document.getElementById('tog__value1').value = '1';
    }
    if(id === '2' && tog__value === '1'){
        const content = document.getElementById('sns__js');
        // content.innerHTML = 'Hello';
        content.style.display = 'none';
        console.log(tog__value);
        document.getElementById('tog__value1').value = '0';
    }
}
showSNS = function(tog__value){
    
}
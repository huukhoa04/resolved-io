var toggle = 0;
//show event
showContent = function(id, tog__value){
    
    if(id === '1' && tog__value === '0'){
        const content = document.getElementById('about__js');
        content.style.display = 'unset';

        const content1 = document.getElementById('com__1');
        content1.style.backgroundColor = '#ffffff';
        content1.style.color = '#00BFFF';
        content1.style.borderLeft = '5px solid #00BFFF';
        document.getElementById('tog__value').value = '1';
       
    }
    if(id === '1' && tog__value === '1'){
        const content = document.getElementById('about__js');
        content.style.display = 'none';
        // content.innerHTML = 'Hello';
        const content1 = document.getElementById('com__1');

        content1.style.backgroundColor = '#00BFFF';
        content1.style.color = '#000000';
        content1.style.borderLeft = '5px solid #00BFFF';

        document.getElementById('tog__value').value = '0';
    }
    if(id === '2' && tog__value === '0'){
        const content = document.getElementById('sns__js');

        const content1 = document.getElementById('com__2');
        content1.style.backgroundColor = '#ffffff';
        content1.style.color = '#00BFFF';
        content1.style.borderLeft = '5px solid #00BFFF';

        content.style.display = 'flex';

        console.log(tog__value);
        document.getElementById('tog__value1').value = '1';
    }
    if(id === '2' && tog__value === '1'){
        const content = document.getElementById('sns__js');
        content.style.display = 'none';

        const content1 = document.getElementById('com__2');
        content1.style.backgroundColor = '#00BFFF';
        content1.style.color = '#000000';

        console.log(tog__value);
        document.getElementById('tog__value1').value = '0';
    }
}
showSNS = function(tog__value){
    
}
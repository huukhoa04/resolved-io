var toggle = 0;
//show event
showContent = function(id, tog__value){
    
    if(id === '1' && tog__value === '0'){
        const content = document.getElementById('about__js');
        content.innerHTML = '<div class="text_content">' + 
        "Tên: Nguyễn Hữu 'Resolved' Khoa<br>" + "Công việc hiện tại: Sinh Viên<br>" + "Đại Học: Đại Học Đà Nẵng - Trường Đại Học Bách Khoa<br>"
        + "</div>";
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
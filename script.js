function buy(){
    const tr=document.getElementById('tr');


    const date=document.getElementById('date').value;
    const t6=document.createElement('td');
    t6.innerText=date;
    tr.appendChild(t6);

    const photo=document.getElementById('photo');
    const t5=document.createElement('td');
    t5.innerHTML='<img src="images/115.jpg" id="image">';

    tr.appendChild(t5);

    const model=document.getElementById('model').value;
    const t4=document.createElement('td');
    t4.innerText=model;
    tr.appendChild(t4);

    const quality=document.getElementById('quality').value;
    const t3=document.createElement('td');
    t3.innerText=quality;
    tr.appendChild(t3);

    const quantity=document.getElementById('quantity').value;
    const t2=document.createElement('td');
    t2.innerText=quantity;
    tr.appendChild(t2);

    const price=document.getElementById('price').value;
    const t1=document.createElement('td');
    t1.innerText=price;
    tr.appendChild(t1);
}
function buy(){
    const tr=document.getElementById('tr');
    const price=document.getElementById('price').value;
    const t6=document.createElement('td');
    t6.innerText=price;
    tr.appendChild(t6);
    const quantity=document.getElementById('quantity').value;
    const t5=document.createElement('td');
    t5.innerText=quantity;
    tr.appendChild(t5);
    const quality=document.getElementById('quality').value;
    const t4=document.createElement('td');
    t4.innerText=quality;
    tr.appendChild(t4);
    const model=document.getElementById('model').value;
    const t3=document.createElement('td');
    t3.innerText=model;
    tr.appendChild(t3);
    const photo=document.getElementById('photo').value;
    const t2=document.createElement('td');
    t2.innerText=photo;
    tr.appendChild(t2);
    const date=document.getElementById('date').value;
    const t1=document.createElement('td');
    t1.innerText=data;
    tr.appendChild(t1);
}
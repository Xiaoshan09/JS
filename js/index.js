function sumbit(){
    const a = Number(document.querySelector('.s2').value);
    const b = Number(document.querySelector('.s3').value);

    let c = a + b;

    document.querySelector('.text-a').value = c;
}
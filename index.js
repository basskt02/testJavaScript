let iNumber = document.getElementById('in-num') 
let show = document.getElementById('show')


function msg(){
    console.log(typeof(iNumber));
    let IINumber = Number(iNumber.value)
    console.log(typeof(IINumber));
    let result = '';
    for(let i = 1 ; i<= 12 ; i++){
        result += '<p>'
        result +=  (IINumber * i)
        result += '</p>'

    }
    show.innerHTML = result
    console.log(result);
}
   console.log("Bas") 
    






// for(let i = 1; i <= 12 ;i++){
//     if ( i % 2 === 0 ){
//         continue;
//     }
//     if( i % 3 == 0){
//         break;
//     }
//     console.log(i)
// }

// let content1  = document.getElementById('content-1');
// let textHtml = '<b>เกิดมา</b>'
// textHtml += '<i>กฟหกฟ/</i>'
// content1.innerHTML = textHtml


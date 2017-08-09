//function commonCharacterCount(s1, s2) {
//var count=0;
//    s1=s1.split('');
//    s2=s2.split('');
//    for(var i=0;i<s1.length;i++){
//        for(var j=0;j<s2.length;j++){
//            if (i===j) s2.splice(j,1) && count++;
//           
//        }
//    }return count
//}
//
//var s1='a';
//
//var s2 = 'b';

const buttons = document.querySelectorAll('button');

console.log(buttons);
 for(let i=0; i< buttons.length; i++) {
buttons[i].addEventListener('click', ()=> {
    console.log(buttons[i]);
  });
};



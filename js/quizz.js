let lancementQuizz=document.querySelector('.lancementQuizz');
let questionQuizz=document.querySelectorAll('.questionQuizz');
let finQuizz=document.querySelector('#finQuizz');

let boutonDemarer=document.querySelector('#buttonDemarer');
let boutonRejouer=document.querySelector('#buttonRejouer');

let proposition=document.querySelectorAll('.proposition');
let boutonProposition=document.querySelectorAll('.proposition button');
console.log(questionQuizz);

var questionIndex=0;

boutonDemarer.addEventListener('click',()=>{
    lancementQuizz.style.display="none";
    questionQuizz[0].style.display="flex";

});

var resultat=[];
var bilan=[];

boutonProposition.forEach((bouton)=>{
        bouton.addEventListener('click',()=>{
            
            resultat.push(bouton.value);
            questionQuizz[questionIndex].style.display = 'none';
            questionIndex++; 
            if (questionIndex>questionQuizz.length-1) {
                finQuizz.style.display='flex';
                resultat.sort();
                    
        }else{
            questionQuizz[questionIndex].style.display = 'flex';
        }
    }); 
});

console.log('choix',resultat);

proposition.forEach((elt,i)=>{
    var p= proposition.length-1;
    if (i==p) {
        const bouton=proposition[i];
        console.log(bouton);
            bouton.addEventListener('click',()=>{
                resultat.forEach((reponse,i)=>{
                    for (let j = i+1; j < resultat.length+1; j++) {
                        const element = resultat[j];
                        if (element==reponse) {
                            bilan.push(reponse);
                            
                            break;
                        }
                        
                    }
                })
                console.log('bilan',bilan);
                console.log(bilan.length);
                var pasDeCorrespondance=bilan.length;

                if (pasDeCorrespondance==0) {
                    document.querySelector('.bilan').innerHTML='Vous avez une âme incomparable.';
                }else{
                    document.querySelector('#resultat').innerHTML=bilan[0];
                }
                
            }) 
                 
    };
    

    });


boutonRejouer.addEventListener('click', ()=>{
    window.location.reload();
    
});




//definizione nomi, ruoli e foto----------------------------------------------------------
let membri = [
    {
        nome: "WalterGordon",
        ruolo: "OfficeManager",
        foto: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "WayneBarnett",
        ruolo: "Founder&CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "AngelaCaroll",
        ruolo: "ChiefEditor",
        foto: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "AngelaLopez",
        ruolo: "SocialMediaManager",
        foto: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "ScottEstrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg2",
    },
    {
        nome: "BarbaraRamos",
        ruolo: "GraphicDesigner",
        foto: "barbara-ramos-graphic-designer.jpg",
    }
];

//let risultato = prova("ehi");
//console.log(risultato);
let container = document.getElementById("main");
//-------------------------------------------------------------------------------------------



for(i = 0; i<membri.length; i++){
stampaMembroTeam(membri[i]);
}

for(i = 0; i<membri.length; i++){
    container.innerHTML += getHtmlMembroTeam(membri[i]);
    }
    





//----------------------------------------FUNZIONE---------------------------------------------

function stampaMembroTeam(membro){
    console.log(
        `
        ------INFORMAZIONI MEMBRI------
        nome: ${membro.nome}
        ruolo: ${membro.ruolo}
        foto: ${membro.foto}
        -------------------------------
        `
        )

}

function getHtmlMembroTeam(membro){
let result = membro.nome;

return result;
}
//----------------------------------------------------------------------------------------------


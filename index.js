const video = document.getElementById("video");
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function AlternaModal(){
    modal.classList.toggle("aberto");
};

botaoTrailer.addEventListener("click", () => {
    AlternaModal();
    video.setAttribute("src", linkDoVideo);
});

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () =>{
    AlternaModal();
    video.setAttribute("src", "");
});
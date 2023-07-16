const faqList = document.querySelectorAll(".block_questions");
const plusList = document.querySelectorAll(".icon_questions_plus");
const minusList = document.querySelectorAll(".icon_questions_minus");

for (let i = 0; i < plusList.length; i++) {
    plusList[i].addEventListener("click", function() {
        faqList[i].classList.add("block_questions_open");
    });
}

for (let i = 0; i < minusList.length; i++) {
    minusList[i].addEventListener("click", function() {
        faqList[i].classList.remove("block_questions_open");
    });
}


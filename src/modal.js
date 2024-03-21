import axios from "axios";
const buttonClick = document.querySelector(".but");
const modalWindow = document.querySelector(".mdl_box");
const contentForm = document.querySelector(".mdl_forma")
const butClose = document.querySelector(".close");
const inputUserName = document.querySelector(".username");
const butSubmit = document.querySelector(".but_submit");
const inputUserPhone = document.querySelector(".phone");
const formUser = document.querySelector(".forma_for_connect");
const labelText = document.getElementById("label-inpt");
const token = "6077606622:AAG6g12itzLvnsQfazmk9-oBfkHb1kflQYk";
let idCzat;

//get token bot//
axios.get(`https://api.telegram.org/bot${token}/getUpdates`)
    .then(response => { 
        idCzat = response.data.result[response.data.result.length - 1].message.chat.id;
    })
    .catch(error => console.log(error.massage))

//check input name//

async function checkName() {

    if(inputUserName.value.trim() === "") {
        inputUserName.classList.add("red");
    }
    else {
        inputUserName.classList.remove("red");
    }
}

// //check input phone//

async function checkPhone() {

    if(inputUserPhone.value.trim() === "" || !(inputUserPhone.value.trim().includes("+")) || inputUserPhone.value.trim().split('').length < 12) {
        inputUserPhone.classList.add("red");
    }
    else {
        inputUserPhone.classList.remove("red");
    }
}

//succes feedback//

async function succes() {
    contentForm.innerHTML = "";
        contentForm.style.height = "312px";

        let str = ``;
        str += `<svg class="close" fill="black" width="14" height="14">
                    <use href="./sprite.svg#icon-close"></use>
                </svg>
                <h2 class="title_feedback">See you soon!</h2>
                <p class="text_feedback">Ваші дані були успішно відправлені. 
                Будь ласка, очікуйте: я зв'яжуся з Вами якнайшвидше для обговорення деталей.</p>`;

        contentForm.innerHTML = str;
        const titleFdbk = document.querySelector(".title_feedback");
        titleFdbk.style.fontSize = "80px";
        titleFdbk.style.margin = "0";
        titleFdbk.style.textAlign = "center";
}

//succes error//

async function error() {
    contentForm.style.height = "312px";

        let str = ``;
        str += `<svg class="close" fill="black" width="14" height="14">
                    <use href="./sprite.svg#icon-close"></use>
                </svg>
                <h2 class="title_feedback">Error</h2>
                <p class="text_feedback">На жаль, на сайті сталася помилка і Ваші дані не були відправлені. Спробуйте, будь ласка, пізніше.</p>`;

        contentForm.innerHTML = str;
        const titleFdbk = document.querySelector(".title_feedback");
        titleFdbk.style.fontSize = "80px";
        titleFdbk.style.margin = "0";
        titleFdbk.style.textAlign = "center";
} 

buttonClick.addEventListener("click", (e) => {
    modalWindow.style.display = "flex";
    modalWindow.style.alignItems = "center";
    modalWindow.style.justifyContent = "center";
});

butClose.addEventListener("click", (e) => {
    modalWindow.style.display = "none";
});

inputUserName.addEventListener("input", (e) => {
    checkName();
});

inputUserPhone.addEventListener("input", (e) => {
    checkPhone();
});

butSubmit.addEventListener("click", (e) => {
    checkName();
    checkPhone();
})

formUser.addEventListener("submit", async (e) => {
    e.preventDefault();

    checkName();
    checkPhone();

    async function sendMessage(message) {
        await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
                chat_id: idCzat,
                text: message
            })
        .then(response => { 
            succes();
            response.status;
        })
        .catch(error => {
            error();
            console.error("Error in sending sms:", error)
        });
    }
        
        const formData = new FormData(document.querySelector('.forma_for_connect'));
        const userName = formData.get("username");
        const userPhone = formData.get("phone");
        const education = formData.get("education");
        const comment = formData.get("comment");
        
        const message = `
            Нова заявка:
    1) Им'я: ${userName};
    2) Телефон: ${userPhone};
    3) Формат навчання: ${education};
    4) Коментар: ${comment.split("").length > 0 ? comment : "Without comments"};
        `;
        sendMessage(message);
});

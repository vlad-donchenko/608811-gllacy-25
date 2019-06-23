var OpenModal = document.querySelector(".open-modal");
var Modal = document.querySelector(".feedback");
var Overlay = document.querySelector(".overlay");
var CloseModal = document.querySelector(".modal-close");
var FormName = document.getElementById("feedback-name");
var FormEmail = document.getElementById("feedback-email");
var FormComment = document.getElementById("feedback-comment");
var Form = document.getElementById("feedback-form");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

OpenModal.addEventListener("click", function (evt) {
    evt.preventDefault();
    Modal.classList.add("modal-show");
    Overlay.classList.add("overlay-show");

    if (storageName && !storageEmail) {
        FormName.value = storageName;
        FormEmail.focus();
    } else if (storageEmail && !storageName) {
        FormEmail.value = storageEmail;
        FormName.focus();
    } else if (storageEmail && storageName) {
        FormName.value = storageName;
        FormEmail.value = storageEmail;
        FormComment.focus();
    } else {
        FormName.focus();
    }
});

CloseModal.addEventListener("click", function (evt) {
    evt.preventDefault();
    Modal.classList.remove("modal-show");
    Overlay.classList.remove("overlay-show");
});

Overlay.addEventListener("click", function () {
    Modal.classList.remove("modal-show");
    Overlay.classList.remove("overlay-show");
});

Form.addEventListener("submit", function (evt) {
    if (!FormName.value || !FormEmail.value) {
        evt.preventDefault();
        Modal.classList.remove("modal-error");
        Modal.offsetWidth = Modal.offsetWidth;
        Modal.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", FormName.value);
            localStorage.setItem("email", FormEmail.value);
        }
    }
});

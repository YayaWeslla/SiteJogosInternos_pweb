function toggleReadMore(spanId, button) {
    const moreText = document.getElementById(spanId);

    if (moreText.classList.contains("hidden2")) {
        moreText.classList.remove("hidden2");
        button.textContent = "Leia menos";
    } else {
        moreText.classList.add("hidden2");
        button.textContent = "Leia mais";
    }
}

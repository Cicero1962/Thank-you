let ratingValue;

const ratingButtons = document.querySelectorAll(".review__ratingButtons__item");
const submitButton = document.querySelector(".review__submitButton");
const views = document.querySelectorAll(".card__content");
const rating = document.getElementById("rating");

ratingButtons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    if (ratingValue === index + 1) return;

    ratingValue = index + 1;
    rating.innerHTML = ratingValue;

    const activeRatingElement = document.querySelector(
      ".review__ratingButtons__item--active"
    );

    if (activeRatingElement) {
      activeRatingElement.classList.remove(
        "review__ratingButtons__item--active"
      );
    }

    button.classList.add("review__ratingButtons__item--active");
  });
});

submitButton.addEventListener("click", (e) => {
  if (!ratingValue) return;

  views[0].classList.remove("card__content--active");
  views[1].classList.add("card__content--active");
});

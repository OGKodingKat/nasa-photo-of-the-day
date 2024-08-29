
function fetchData() {
    fetch(
        "https://api.nasa.gov/planetary/apod?start_date=2024-08-27&end_date&api_key=o5AX9QHvgnaO9PopIuXavNvuGPSwdmo7j1RexllI"
    )
        .then((response) => response.json())
        .then((data) => {
            data.forEach((item) => {
                const container = document.createElement("div");
                const title = document.createElement("h2");
                const date = document.createElement("p");
                const image = document.createElement("img");
                const description = document.createElement("p");
                const artist = document.createElement("p");

                title.textContent = item.title;
                date.textContent = `Date: ${item.date}`;
                description.textContent = item.explanation;
                image.src = item.url;
                image.alt = item.title;
                image.style.maxWidth = "100%";

                if (item.copyright) {
                    artist.textContent = `Artist: ${item.copyright}`;
                } else {
                    artist.textContent = "Artist: Unknown";
                }
                container.appendChild(title);
                container.appendChild(date);
                container.appendChild(image);
                container.appendChild(description);
                container.appendChild(artist);

                document.getElementById("card-wrapper").appendChild(container);
            });
        })

        .catch((error) => console.error("Error:", error));
}
function resetData() {
    const cardWrapper = document.getElementById("card-wrapper");
    cardWrapper.innerHTML = ''; // Clear the contents of the card-wrapper
}

document.getElementById('fetchData').addEventListener('click', function (e) { fetchData() });
document.getElementById('resetData').addEventListener('click', function (e) { resetData() });


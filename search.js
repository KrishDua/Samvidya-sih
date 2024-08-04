document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const searchResults = document.getElementById("search-results");

    searchButton.addEventListener("click", function() {
        const searchTerm = searchInput.value.trim();

        if (searchTerm !== "") {
            searchResults.innerHTML = `<p>Search results for: "${searchTerm}"</p>`;
        } else {
            searchResults.innerHTML = "<p>Please enter a search term.</p>";
        }
    });
    searchInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            searchButton.click(); 
        }
    });
});

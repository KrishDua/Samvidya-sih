document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const searchResults = document.getElementById("search-results");

    searchButton.addEventListener("click", function() {
        const searchTerm = searchInput.value.trim();

        if (searchTerm !== "") {
            // You can implement your search functionality here.
            // For demonstration purposes, let's just display the search term.
            searchResults.innerHTML = `<p>Search results for: "${searchTerm}"</p>`;
        } else {
            searchResults.innerHTML = "<p>Please enter a search term.</p>";
        }
    });

    // You can also add functionality to trigger the search on pressing Enter.
    searchInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            searchButton.click(); // Trigger the search button click event.
        }
    });
});

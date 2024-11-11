const products = [
    "Audio",
    "Computers",
    "Graphics Cards",
    "Keyboard and Mice",
    "Laptops",
    "Monitors",
    "Networking",
    "Peripherals",
    "Printing & Scanning",
    "Software",
    "Storage",
    "Tablets"
  ];
  
  function searchProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const results = products.filter(product => product.toLowerCase().includes(query));
    displayResults(results);
  }
  
  function displayResults(results) {
    const resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = "";
    
    if (results.length === 0) {
      resultsContainer.innerHTML = "<p>No products found.</p>";
    } else {
      const ul = document.createElement("ul");
      results.forEach(result => {
        const li = document.createElement("li");
        li.textContent = result;
        ul.appendChild(li);
      });
      resultsContainer.appendChild(ul);
    }
  }
  document.getElementById("searchInput").addEventListener("input", searchProducts);
  
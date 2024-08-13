# Random Quote Generator

This project is a simple web application that generates random quotes from a public API. The application uses HTML, CSS, and JavaScript to fetch and display quotes, with the ability to generate new quotes upon user interaction.

## Features

- **Display Random Quotes:** Shows a random quote with the author's name.
- **Regroup Button:** Fetches and displays a new random quote when clicked.
- **Link Button:** Also fetches and displays a new random quote when clicked.

## Files

- **HTML (`index.html`):** The structure of the web page, including the quote display area and buttons.
- **CSS (`style.css`):** Styles for the web page (not provided in the code snippet).
- **JavaScript (`main.js`):** Logic to fetch random quotes and update the display.

## Code Explanation

### HTML (`index.html`)

The HTML file sets up the basic structure of the application:

- `<div class="quot">` contains the quote and the author's name.
- `<div class="btns">` contains two buttons for generating new quotes.

### JavaScript (`main.js`)

The JavaScript file contains the logic for fetching and displaying random quotes:

1. **Selectors:**

   - `author` and `quot` are used to update the displayed quote and author.
   - `newQuot` and `linkBtn` are buttons that trigger a new quote to be displayed.

2. **Fetching Quotes:**

   - `generateRandomQuotes` function fetches quotes from the public API `https://type.fit/api/quotes`.
   - The data is then parsed as JSON and returned.

3. **Displaying Quotes:**

   - `generateQuote` function selects a random quote from the fetched data and updates the HTML content of `author` and `quot`.

4. **Event Listeners:**

   - `newQuot` and `linkBtn` both trigger the `generateQuote` function when clicked.

5. **Initial Display:**
   - `generateQuote` is called once when the script loads to display an initial quote.

## Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/elasri21/devChallenges_random_quote.git
   ```

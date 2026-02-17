# Guess My Number Game

A polished browser-based number guessing game built with vanilla HTML, CSS, and JavaScript.

## Features

- Random secret number between **1 and 100**
- Score tracking and high score persistence (in-session)
- Input validation for empty/out-of-range guesses
- Keyboard support (`Enter` to submit)
- Responsive and accessible UI enhancements

## Project Structure

```text
.
├── assets/
│   └── images/
│       └── background.jpeg
├── css/
│   └── style.css
├── js/
│   └── script.js
└── index.html
```

## Run Locally

Because this is a static project, you can run it with any simple file server:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

## Development Notes

- No frameworks or build tools required.
- Keep styles in `css/style.css` and logic in `js/script.js`.
- Use semantic HTML and accessible labels/messages for UI updates.

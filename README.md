# Password Generator Application

## Overview

The Password Generator Application is a simple yet powerful tool built using React that allows users to generate secure passwords based on customizable criteria such as length, inclusion of uppercase/lowercase letters, numbers, and symbols.

## Features

- Selectable password length (4-20 characters)
- Option to include:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Symbols
- Password strength indicator
- Copy password to clipboard functionality
- Error handling for invalid input selections

## Technologies Used

- React.js
- Tailwind CSS (for styling)

## Project Structure

```
password-generator-app/
│── src/
│   ├── components/
│   │   ├── App.jsx
│   ├── hooks/
│   │   ├── use-password-generator.js
│   ├── index.js
│── public/
│── package.json
│── README.md
```

## Usage

1. Adjust the slider to set the desired password length.
2. Select the criteria (uppercase, lowercase, numbers, symbols) by checking the corresponding checkboxes.
3. Click the **Generate Password** button.
4. Copy the generated password using the **COPY** button.
5. The password strength will be displayed based on its length.

## Custom Hook - `usePasswordGenerator`

The `usePasswordGenerator` hook handles password generation logic.

### Functions:

- `generatePassword(checkBoxData, length)`: Generates a password based on user selections.
- `password`: Holds the generated password.
- `errorMessage`: Holds any error messages if no options are selected.

## License

This project is open-source and available under the MIT License.

## Author

Developed by [Your Name] - UI/UX & Software Engineer

## Contributions

Contributions are welcome! Feel free to fork the repository and submit pull requests.

import { useState } from 'react';


const SearchComplete = () => {

   

        const phrases = [
            'What to watch',
            'What is my IP',
            "When is Mother's Day 2024",
            'How many weeks in a year',
            'How many days until Christmas',
            'How to screenshot on Mac',
            'What time is it',
            'How many ounces in a gallon',
            'When is Easter 2024',
            'How many ounces in a cup',
        ]

const [input, setInput] = useState("");
const [suggestions, setSuggestions] = useState([]);

const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setInput(query);

    if (query) {
      const filtered = phrases.filter((phrase) =>
        phrase.toLowerCase().includes(query)
      );
      setSuggestions(filtered.slice(0, 5)); // Tik iki 5 pasiūlymų
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setSuggestions([]);
  };

  return (
    <div>
      <h1>Autocomplete</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Įveskite tekstą..."
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li
            key={index}
            onClick={() => handleSuggestionClick(suggestion)}
            style={{ cursor: "pointer", margin: "5px 0" }}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComplete;
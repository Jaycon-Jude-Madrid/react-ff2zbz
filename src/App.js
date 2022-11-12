import React from 'react';
import './style.css';

export default function App() {
  const [word, setWords] = React.useState('');
  const [ryhme, setRyhme] = React.useState(null);

  const useFetchRyhme = async (word) => {
    const getData = await fetch(
      `https://api.datamuse.com/words?rel_rhy=${word}`
    );
    const val = await getData.json();
    setRyhme(val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    useFetchRyhme(word);
  };

  const searchItem = async (newWord) => {
    useFetchRyhme(newWord);
    setWords(newWord);
    setRyhme(val);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Search synoym</label>
        <input onChange={(e) => setWords(e.target.value)} value={word} />
        <button type="submit"> Submit </button>
      </form>
      {ryhme ? (
        ryhme.map((item) => (
          <ul onClick={() => searchItem(item.word)}>{item.word}</ul>
        ))
      ) : (
        <h5>No value </h5>
      )}
    </div>
  );
}

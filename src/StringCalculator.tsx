import { useState } from 'react';
import { add } from './add';

function StringCalculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);
  const [error, setError] = useState<null | string>(null);

  const handleCalculate = () => {
    try {
      setResult(add(input));
      setError(null);
    } catch (e) {
        setResult(0)
      setError('Wrong input');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add</h2>
      <p style={styles.description}>
        A simple string calculator that takes a string of comma-separated numbers (or new lines) and returns their sum.
      </p>
      <p style={styles.description}>
        To change the delimiter, the beginning of the string should contain a separate line that looks like this: "//[delimiter]\n[numbers...]". For example, "//;\n1;2" where the delimiter is ";" should return 3.
      </p>

      <div style={styles.inputContainer}>
        <textarea
          placeholder="Enter numbers (comma, new line, or custom delimiter separated)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={5}
          cols={50}
        />
        <button
          style={styles.button}
          onClick={handleCalculate}
        >
          Calculate Sum
        </button>
      </div>

      {result > 0 && (
        <div style={styles.resultContainer}>
          <div style={styles.resultHeading}>Result</div>
          <div style={styles.result}>The sum is: {result}</div>
        </div>
      )}

      {error && (
        <div style={styles.errorContainer}>
          <div style={styles.errorHeading}>Error</div>
          <div style={styles.error}>{error}</div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  inputContainer: {
    marginBottom: '20px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  button: {
    display: 'block',
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  resultContainer: {
    marginTop: '20px',
  },
  resultHeading: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  result: {
    fontSize: '16px',
  },
  errorContainer: {
    marginTop: '20px',
    color: 'red',
  },
  errorHeading: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  error: {
    fontSize: '16px',
  },
};

export default StringCalculator;

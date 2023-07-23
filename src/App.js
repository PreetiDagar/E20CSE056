import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("https://img.freepik.com/free-vector/gradient-numerology-background_23-2150066807.jpg?w=996&t=st=1690098373~exp=1690098973~hmac=a9069b60bed5279d840702f0eb4b0272ed297e01de64aba1321018c9abbe4eb3");
  background-size: cover;
`;

const Button = styled.button`
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
`;

function App() {
  const [numbers, setNumbers] = useState([]);

  const getMergedNumbers = () => {
    const urls = [
      "http://20.244.56.144/numbers/primes",
      "http://20.244.56.144/numbers/fibo",
      "http://20.244.56.144/numbers/odd",
    ];

    const fetchNumbers = async (url) => {
      try {
        const response = await axios.get(url, { timeout: 500 });
        return response.data; // Assuming the API returns data in the format: { "numbers": [1, 2, 3, ...] }
      } catch (error) {
        console.error("Error fetching data:", error);
        return { numbers: [] }; // Return empty array if API call fails
      }
    };

    Promise.all(urls.map((url) => fetchNumbers(url)))
      .then((results) => {
        const uniqueNumbers = Array.from(
          new Set(results.flatMap((result) => result.numbers))
        );
        setNumbers(uniqueNumbers.sort((a, b) => a - b));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <Container>
      <Button onClick={getMergedNumbers}>Get Merged Numbers</Button>
      <div>
        {numbers.length > 0 ? (
          <pre>{JSON.stringify({ numbers }, null, 2)}</pre>
        ) : (
          <p>No numbers fetched yet.</p>
        )}
      </div>
    </Container>
  );
}

export default App;





import React, { useState } from 'react';

function DereceDonustur() {
  const [derece, setDerece] = useState('');
  const [sonuc, setSonuc] = useState('');

  function handleClick(event) {
    const inputValue = parseFloat(derece);

    if (!derece.trim()) {
      alert("Lütfen bir derece değeri girin.");
      return; // Eğer input boşsa işlemi sonlandır
    }
    
    if (event.target.id === 'kel') {
      const kelvinSonuc = (inputValue + 273).toFixed(2);
      setSonuc(`Sonuç: ${kelvinSonuc} °K  - Kelvin dönüşümü`);
    } else if (event.target.id === 'fah') {
      const fahrenheitSonuc = ((9/5) * inputValue + 32).toFixed(2);
      setSonuc(`Sonuç: ${fahrenheitSonuc} °F  - Fahrenheit dönüşümü`);
    }

    setDerece(''); // Input alanını temizle
  }

  function handleChange(event) {
    const inputValue = event.target.value;
    setDerece(inputValue);
  }

  return (
    <div className="jumbotron" style={{ border: "1px solid black", padding: "14px", margin: "100px", textAlign: "center", }}>
      <h3>Derece Dönüştürücü</h3>
      <input
        type="number"
        className="form-control Hover"
        id="derece"
        placeholder="Dereceyi Giriniz"
        value={derece}
        onChange={handleChange}
       
      />
      <br />
      <button onClick={handleClick} id='kel' type="button" className="btn btn-primary" style={{ width: "100%", marginBottom: "4px" }}>Kelvin'e Dönüştür</button>
      <br />
      <button onClick={handleClick} id='fah' type="button" className="btn btn-primary" style={{ width: "100%" }}>Fahrenheit'a Dönüştür</button>
      <br />
      <label id="sonuc" htmlFor="sonuc" style={{ fontWeight: "bold" }}> {sonuc}</label>
    </div>
  );
}

export default DereceDonustur;

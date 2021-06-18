import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [barcodeRead, setBarcodeRead] = useState("");

  const barcode = {
    timing: 1000,
    data: "",
  };

  const barcodeReaded = () => {
    if (barcode.data.length > 1) {
      setBarcodeRead(barcode.data);
    } else {
      barcode.data = "";
    }
  };

  let timeout = setTimeout(barcodeReaded, 500);

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      console.log(e.key);
      console.log(e.timeStamp);
      if (barcode.data.length === 0 || e.timeStamp - barcode.timing < 200) {
        barcode.data += e.key;
        barcode.timing = e.timeStamp;
        clearTimeout(timeout);
        timeout = setTimeout(barcodeReaded, 500);
      } else {
        barcode.data = "";
      }
      console.log(barcode);
    });
  }, []);

  return (
    <div className="App">
      <div>Readed: {barcodeRead}</div>
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { signUp } from "./config/firebase";
import './App.css';

const App = () => {
  useEffect(() => {
    signUp("Joe", "joe123@mail.com","1234567").then(() => {
      console.log("Kayıt tamamlandı!");
    })
    .catch((e) => {
      console.log(e);
    });
  }, [] );
  return (
    <div className="App">
      <header >
        <input type="text" placeholder="İsminizi giriniz..." />
        <input type="text" placeholder="Email adresinizi giriniz... " />
        <input type="password" placeholder="Şifrenizi giriniz..." />
        <button>Gönder</button>
      </header>
    </div>
  );
};

export default App;

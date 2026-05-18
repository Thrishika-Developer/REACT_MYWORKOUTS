import { useContext } from "react";
import { MainContext } from "../core/context/GeneralContext";

export default function HomePage() {
  const { language, theme } = useContext(MainContext);
  // console.log("settings===>",settings)

  return (
    <div>
      <div className={theme == "dark" ? "bg-dark text-white" : "bg-white"}>
        <h1>Home page</h1>
      </div>

      <div>
        <p>{language == "en" ? "welcome to react world" : "வரவேற்பு"}</p>
      </div>
    </div>
  );
}

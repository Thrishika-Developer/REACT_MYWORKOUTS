import { useState } from "react";
import codeNames from "../assets/json/CodeList.json";
import itemNames from "../assets/json/ItemList.json";

export default function Dropdown() {
  const [codeList] = useState(codeNames);
  const [itemList] = useState(itemNames);

  const [selectedCodeList, setSelectedCodeList] = useState("");

  return (
    <div>
      <div>
        <select
          value={selectedCodeList}
          onChange={(event) => setSelectedCodeList(event.target.value)}
        >
          <option value="">Select Type</option>

          {codeList.map((value, index) => (
            <option key={index} value={value.code}>
              {value.type}
            </option>
          ))}
        </select>

        <p>Your selected item is : {selectedCodeList}</p>

        <select>
          <option value="">Select Food</option>

          {itemList
            .filter((value) => String(value.code) === selectedCodeList)
            .map((value, index) => (
              <option key={index}>{value.food}</option>
            ))}
        </select>
      </div>
    </div>
  );
}

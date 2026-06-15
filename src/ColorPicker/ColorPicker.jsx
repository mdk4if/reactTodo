import { useState } from "react";
import styles from "./ColorPicker.module.css";

const ColorPicker = () => {
    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (e) => {
        setColor(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div className={styles.colorPickerBox}>
            <h1>Color Picker</h1>

            <div
                className={styles.colorDisplay}
                style={{ backgroundColor: color }}
            >
                <p>Selected Color: {color}</p>
            </div>

            <label>Select a Color</label>

            <input
                type="color"
                value={color}
                onChange={handleColorChange}
            />
        </div>
    );
};

export default ColorPicker;
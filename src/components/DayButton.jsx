import React from "react";

const DayButton = ({ id, label, isActive, onToggle }) => {
    return (
        <button
            type="button"
            onClick={() => onToggle(id)}
            className={
                `font-roboto-600 text-sm p-2 px-4 rounded-full
                ${
                    isActive ? "bg-primary-300 border border-primary-300 text-white" : "bg-primary-700 bg-opacity-30 border border-primary-400 text-primary-400"
                }
            `}        
        >
            {label}
        </button>
    );
}

export default DayButton
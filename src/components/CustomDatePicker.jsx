import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../assets/css/customDatePicker.css"

const CustomDatePicker = ({ selectedDate, setSelectedDate }) => {
    const formatDate = (date) => {
        if (!date) return '';
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Menambahkan leading zero
        const day = date.getDate().toString().padStart(2, '0'); // Menambahkan leading zero
        return `${year}-${month}-${day}`;
    };

    return (
        <DatePicker
            wrapperClassName="w-full"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            customInput={
                <div className="relative">
                    <input
                        value={formatDate(selectedDate)}
                        onClick={(e) => e.preventDefault()}
                        onChange={(e) => { }}
                        className="mt-1 w-full px-4 py-3 rounded-lg border border-neutral-300 bg-neutral-200 text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-300"
                    />
                    <div className="absolute inset-y-0 right-3 top-1 flex items-center pointer-events-none">
                        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="20" fill="#3DAC21" />
                            <path d="M17 24.5C16.3 24.5 15.7083 24.2583 15.225 23.775C14.7417 23.2917 14.5 22.7 14.5 22C14.5 21.3 14.7417 20.7083 15.225 20.225C15.7083 19.7417 16.3 19.5 17 19.5C17.7 19.5 18.2917 19.7417 18.775 20.225C19.2583 20.7083 19.5 21.3 19.5 22C19.5 22.7 19.2583 23.2917 18.775 23.775C18.2917 24.2583 17.7 24.5 17 24.5ZM13 30C12.45 30 11.9792 29.8042 11.5875 29.4125C11.1958 29.0208 11 28.55 11 28V14C11 13.45 11.1958 12.9792 11.5875 12.5875C11.9792 12.1958 12.45 12 13 12H14V10H16V12H24V10H26V12H27C27.55 12 28.0208 12.1958 28.4125 12.5875C28.8042 12.9792 29 13.45 29 14V28C29 28.55 28.8042 29.0208 28.4125 29.4125C28.0208 29.8042 27.55 30 27 30H13ZM13 28H27V18H13V28Z" fill="#F2F2F2" />
                        </svg>
                    </div>

                </div>
            }
            dateFormat="yyyy/mm/dd"
        />
    );
}

export default CustomDatePicker
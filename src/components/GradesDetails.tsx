import React, { ChangeEvent, useEffect, useState, FormEvent } from "react";
import { Grade } from "../interfaces";

interface Props {
    onSave: (grade: Grade) => void;
    onUpdate: (grade: Grade) => void;
    selectedGrade: Grade;

}

const GradeDetails: React.FC<Props> = (props: Props) => {
    let emptyGrade: Grade = {
        id: -1,
        studentFirstName: "",
        studentLastName: "",
        subject: "",
        score: 0,
        date: new Date(),
        active: true
    };

    const [selectedGrade, setGrade] = useState<Grade>(emptyGrade);

    useEffect(() => {
        if (props.selectedGrade) {
            setGrade(props.selectedGrade);
        } else {
            handleClear();
        }
    }, [props.selectedGrade])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setGrade(prevGrade => ({ ...prevGrade, [name]: value }));
    };

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setGrade(prevGrade => ({ ...prevGrade, date: new Date(value) }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (selectedGrade.id !== -1) {
            props.onUpdate(selectedGrade);
        } else {
            props.onSave(selectedGrade);
        }
    };

    const handleClear = () => {
        setGrade(emptyGrade);
    };

    return (
        <>
            <div className="container-fluid mt-3">
                <h2 id="gradeDetailsTag">Grade Details</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="form-label" htmlFor="field1">First Name:</label>
                        <input type="text" id="field1" name="studentFirstName" className="form-control" value={selectedGrade.studentFirstName} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <label htmlFor="field2" className="form-label">Last Name:</label>
                        <input type="text" id="field2" name="studentLastName" className="form-control" value={selectedGrade.studentLastName} onChange={handleInputChange} required />
                    </div>
                    <label htmlFor="field3" className="form-label">Subject:</label>
                    <div className="input-group">
                        <span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                        </svg></span>
                        <input type="text" id="field3" name="subject" className="form-control" value={selectedGrade.subject} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <label htmlFor="field4" className="form-label">Score:</label>
                        <input type="number" id="field4" name="score" className="form-control" value={selectedGrade.score} onChange={handleInputChange} required />
                    </div>
                    <label htmlFor="field5" className="form-label">Date:</label>
                    <div className="input-group">
                        <span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg></span>
                        <input type="date" id="field5" name="date" className="form-control" value={selectedGrade.date.toISOString().substr(0, 10)} onChange={handleDateChange} required />
                    </div>
                    <div className="container-fluid d-flex justify-content-evenly mt-3 mb-3">
                        <button id="saveButton" type="submit" className="btn shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle me-2 mb-1" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg>Save</button>
                        <button id="clearButton" className="btn shadow-lg" onClick={handleClear}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle me-2 mb-1" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>Clear</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default GradeDetails;
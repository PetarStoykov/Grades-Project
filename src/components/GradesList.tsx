import React from "react";
import { useState } from "react";
import { Grade } from "../interfaces";

interface Props {
    grades: Grade[];
    onSelectedGrade: (info: Grade) => void;
    onDeletedGrade: (grades: Grade[]) => void;
}

const GradesList: React.FC<Props> = (props: Props) => {
    const [gradeDeleted, setGradeDeleted] = useState(false);
    const [selectedGrade, setGrade] = useState<Grade>();
    const handleClick = (id: number, ignoreItem: boolean) => {
        let foundGrade = props.grades.find((item) => item.id === id) as Grade;

        props.onSelectedGrade(foundGrade);
    };

    const handleDelete = (id: number) => {
        let deletedGrade = props.grades.find((item) => item.id === id) as Grade;
        deletedGrade.active = false;
        setGrade(selectedGrade);
        const updatedGrades = props.grades.filter((grade) => grade.id !== id);
        props.onDeletedGrade(updatedGrades);
    };

    return (
        <>
            <div className="container-fluid mt-3">
                <h2 id="gradesListTag" className="">Grades List</h2>
                {props.grades.length === 0 ? <h3 id="noGradesTag">No Grades Found</h3> : null}
                <ul>
                    {props.grades.map((item) => (
                        <li id="list" key={item.id} onClick={(e) => { handleClick(item.id, gradeDeleted) }} className="mb-3">
                            <p className="id">{item.id}</p>
                            <p className="field1">{item.studentFirstName}</p>
                            <p className="field2">{item.studentLastName}</p>
                            <p className="field3">{item.subject}</p>
                            <p className="field4">{item.score}</p>
                            <p className="field5">{item.date.toString()}</p>

                            <button id="deleteButton" className="deleteButton btn shadow" onClick={() => handleDelete(item.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash me-2 mb-1" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                            </svg>Delete Grade</button>

                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default GradesList;
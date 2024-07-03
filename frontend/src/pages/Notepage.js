import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

const Notepage = () => {
    let { id } = useParams();
    let navigate = useNavigate();

    let [note, setNote] = useState({ body: '' });

    useEffect(() => {
        const getNote = async () => {
            if (id === 'new') return;
            let response = await fetch(`/api/notes/${id}/`);
            let data = await response.json();
            setNote(data);
        };

        getNote();
    }, [id]);

    const createNote = async () => {
        await fetch(`/api/notes/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        });
    };

    const updateNote = async () => {
        await fetch(`/api/notes/${id}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        });
    };

    const deleteNote = async () => {
        await fetch(`/api/notes/${id}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        navigate('/');
    };

    const handleChange = (value) => {
        setNote(prevNote => ({ ...prevNote, 'body': value }));
    };

    const handleSubmit = () => {
        if (id !== 'new' && note.body === '') {
            deleteNote();
        } else if (id !== 'new') {
            updateNote();
        } else if (id === 'new' && note.body !== '') {
            createNote();
        }
        navigate('/');
    };

    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <ArrowLeft onClick={handleSubmit} />
                </h3>
                {id !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}
            </div>
            <textarea onChange={(e) => { handleChange(e.target.value) }} value={note.body}></textarea>
        </div>
    );
};

export default Notepage;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

// const Notepage = () => {
//     let { id } = useParams();
//     let navigate = useNavigate();

//     let [note, setNote] = useState({ body: '' });

//     useEffect(() => {
//         getNote();
//     }, [id]);

//     let getNote = async () => {
//         if (id === 'new') return;
//         let response = await fetch(`/api/notes/${id}/`);
//         let data = await response.json();
//         setNote(data);
//     };

//     let createNote = async () => {
//         fetch(`/api/notes/`, {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(note)
//         });
//     };

//     let updateNote = async () => {
//         fetch(`/api/notes/${id}/`, {
//             method: "PUT",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(note)
//         });
//     };

//     let deleteNote = async () => {
//         fetch(`/api/notes/${id}/`, {
//             method: "DELETE",
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         navigate('/');
//     };

//     let handleChange = (value) => {
//         setNote(note => ({ ...note, 'body': value }))
//         // console.log('Handle Change:', note)
//     }

//     let handleSubmit = () => {
//         if (id !== 'new' && note.body === '') {
//             deleteNote();
//         } else if (id !== 'new') {
//             updateNote();
//         } else if (id === 'new' && note.body !== null) {
//             createNote();
//         }
//         navigate('/');
//     };

//     return (
//         <div className='note'>
//             <div className='note-header'>
//                 <h3>
//                     <ArrowLeft onClick={handleSubmit} />
//                 </h3>
//                 {id !== 'new' ? (
//                     <button onClick={deleteNote}>Delete</button>
//                 ) : (
//                     <button onClick={handleSubmit}>Done</button>
//                 )}
//             </div>
//             <textarea onChange={(e) => { handleChange(e.target.value) }} value={note?.body}></textarea>

//         </div>
//     );
// };

// export default Notepage;



// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

// // const Notepage = () => {
// //     let { id } = useParams();
// //     let navigate = useNavigate(); // Use useNavigate instead of history

// //     let [note, setNote] = useState(null);

// //     useEffect(() => {
// //         getNote();
// //     }, [id]);

// //     let getNote = async () => {
// //         if (id === 'new') return

// //         let response = await fetch(`/api/notes/${id}`);
// //         let data = await response.json();
// //         setNote(data);
// //     };
// //     let createNote = async () => {
// //         fetch(`/api/notes/create/`, {
// //             method: "POST",
// //             headers: {
// //                 'Content-Type': 'application/json'
// //             },
// //             body: JSON.stringify(note)
// //         });
// //     };

// //     let updateNote = async () => {
// //         fetch(`/api/notes/${id}/update/`, {
// //             method: "PUT",
// //             headers: {
// //                 'Content-Type': 'application/json'
// //             },
// //             body: JSON.stringify(note)
// //         });
// //     };
// //     let deleteNote = async () => {
// //         fetch(`/api/notes/${id}/delete/`, {
// //             method: "DELETE",
// //             headers: {
// //                 'Content-Type': 'application/json'
// //             },

// //         })
// //         navigate('/');
// //     };

// //     let handleSubmit = async () => {
// //         if (id !== 'new' && note.body === '') {
// //             deleteNote()
// //         } else if (id !== 'new') {
// //             updateNote()
// //         } else if (id === 'new' && note.body !== '') {
// //             createNote()
// //         }

// //         navigate('/'); // Use navigate instead of history.push
// //     };
// //     let handleChange = (value) => {
// //         setNote(note => ({ ...note, 'body': value }))

// //     }
// //     return (
// //         <div className='note'>
// //             <div className='note-header'>
// //                 <h3>
// //                     <ArrowLeft onClick={handleSubmit} />

// //                 </h3>
// //                 {id !== 'new' ? (
// //                     <button onClick={deleteNote}>Delete</button>
// //                 ) : (
// //                     <button onClick={handleSubmit} >Done</button>
// //                 )}

// //             </div>
// //             <textarea
// //                 onChange={(e) => { handleChange(e.target.value) }}
// //                 value={note?.body}>
// //             </textarea>
// //         </div>
// //     );
// // };

// // export default Notepage;

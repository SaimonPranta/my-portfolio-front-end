import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Header/Header';

const uploadIcon = <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
</svg>

const EditProject = () => {
    const [info, setInfo] = useState({})
    const [imageInfo, setImageInfo] = useState('')
    const [codition, setCondition] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:7000/api/single_porject?id=${id}`)
            .then(res => res.json())
            .then(data => {
                document.getElementById("title").value = data[0].title;
                document.getElementById("gitHub").value = data[0].gitHub;
                document.getElementById("liveDemo").value = data[0].liveLink;
                const currentInfo = { ...info }
                currentInfo.title = data[0].title;
                currentInfo.gitHub = data[0].gitHub;
                currentInfo.liveLink = data[0].liveLink;
                currentInfo.id = id;
                setInfo(currentInfo);

            })
    }, []);
    console.log(info)

    // Auto Clear Form Sucess and Warning Message
    const autoClearWarningMsg = () => {
        const currentCondition = { ...codition };
        currentCondition["sucess"] = "";
        currentCondition["message"] = "";
        setCondition(currentCondition)

    };

    const inputHandle = (e) => {
        const currentInfo = { ...info }
        const inputName = e.target.name
        const inputValue = e.target.value
        if (inputName === "image") {
            const currentImg = e.target.files[0]
            setImageInfo(currentImg)
        } else {
            currentInfo[inputName] = inputValue
            setInfo(currentInfo)
        }
    };

    const handleAddPorjects = (e) => {
        e.preventDefault()
        const currentCondition = { ...codition }
        const currentID = id || info.id
        const formData = new FormData();
        formData.append("image", imageInfo)
        formData.append("title", info.title)
        formData.append("gitHub", info.gitHub)
        formData.append("liveLink", info.liveLink)
        formData.append("id", currentID)



        fetch(process.env.REACT_APP_PROJECT_API, {
            method: "PATCH",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.sucess) {
                    document.getElementById("title").value = "";
                    document.getElementById("gitHub").value = "";
                    document.getElementById("liveDemo").value = "";
                    currentCondition["sucess"] = data.sucess;
                    currentCondition["message"] = "";
                    setCondition(currentCondition)
                } else if (data.message) {
                    currentCondition["sucess"] = "";
                    currentCondition["message"] = data.message;
                    setCondition(currentCondition)
                } else {
                    currentCondition["sucess"] = "";
                    currentCondition["message"] = "Failed to create Project!";
                    setCondition(currentCondition)
                }
                setTimeout(() => {
                    autoClearWarningMsg()
                }, 10000);
            })
    };


    return (
        <section>
            <Header />
            <div className='customise-projects'>
                <form onSubmit={handleAddPorjects} >
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" placeholder='Project Name' required onChange={inputHandle} id="title" autoComplete="off" />
                    </div>
                    <div>
                        <label>Github Link</label>
                        <input type="url" name="gitHub" placeholder='Link' required onChange={inputHandle} id="gitHub" autoComplete="off" />
                    </div>
                    <div>
                        <label>Live Demo Link</label>
                        <input type="url" name="liveLink" placeholder='Link' required onChange={inputHandle} id="liveDemo" autoComplete="off" />
                    </div>
                    <div className='image-upload'>
                        <div className='image-div'>
                            {uploadIcon}
                            <span>Image</span>
                            <input type="file" name="image" required onChange={inputHandle} id="image" autoComplete="off" />
                        </div>
                    </div>
                    <div className='submit-container'>
                        <input type="submit" value="Update Project" />
                        {
                            codition.sucess && !codition.message && <p className='sucess' style={{ display: "block" }}>{codition.sucess}</p>
                        }
                        {
                            !codition.sucess && codition.message && <p className='warning' style={{ display: "block" }}>{codition.message}</p>
                        }
                    </div>
                </form>
            </div>
        </section>
    );
};

export default EditProject;
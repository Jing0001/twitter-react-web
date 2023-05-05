import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateUser} from "../reducers/profile-reducer";

const EditProfile = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);
    const [userName, setUserName] = useState(profile.firstName + " " + profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);
    const [edit, setEdit] = useState(true)
    const saveEdit = () => {
        const newFirstName = userName.split(" ")[0];
        let newHandle = "@" + userName;
        newHandle = newHandle.replace(/\s/g, '').toLowerCase();
        dispatch(updateUser({
            ...profile,
            firstName: newFirstName,
            lastName: userName.slice(newFirstName.length + 1),
            handle: newHandle,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth
        }));
    }

    const formatDateMMMDDYYYY = (inputDate) => {
        return new Date(inputDate).toLocaleString('en-CA',
            {month: 'short', day: 'numeric', year: 'numeric'});
    }

    const formatDateMM_dd_yyyy = (inputDate) => {
        const [year, month, date] = inputDate.split("-")
        return month + '/' + date + '/' + year;
    }

    return (
        <>
            <div className="row align-items-center pb-1">
                <div className="col-auto">
                    <Link to="/tuiter/profile" className="btn" title="cancel">
                        <i className="bi bi-x-lg"/>
                    </Link>
                </div>
                <div className="col-10">
                    <span className="fs-5 fw-bold">Edit Profile</span>
                    <Link to="/tuiter/profile" className="float-end btn border rounded-pill fw-bold btn-primary"
                          onClick={saveEdit}>Save
                    </Link>
                </div>
            </div>
            <img src={profile.bannerPicture} width="100%" height="250px" alt="..."/>
            <img src={profile.profilePicture} width="150px" height="150px" className="rounded-circle"
                 style={{position: "relative", marginTop: "-75px", marginLeft: "10px"}}/>
            <div className="px-3">
                <div className="border w-100 rounded-1 mt-2">
                    <label className="wd-input-label text-secondary ms-2">Name</label>
                    <input type="text"
                           className="form-control border-0"
                           defaultValue={userName}
                           onChange={(event) => setUserName(event.target.value)}/>
                </div>
                <div className="border w-100 rounded-1 mt-4">
                    <label className="wd-input-label text-secondary ms-2">Bio</label>
                    <textarea rows={3}
                              className="form-control border-0"
                              value={bio}
                              onChange={(event) => setBio(event.target.value)}/>
                </div>
                <div className="border w-100 rounded-1 mt-4">
                    <label className="wd-input-label text-secondary ms-2">Location</label>
                    <input type="text"
                           className="form-control border-0"
                           defaultValue={location}
                           onChange={(event) => setLocation(event.target.value)}/>
                </div>
                <div className="border w-100 rounded-1 mt-4">
                    <label className="wd-input-label text-secondary ms-2">Website</label>
                    <input type="text"
                           className="form-control border-0"
                           defaultValue={website}
                           onChange={(event) => setWebsite(event.target.value)}/>
                </div>
                <div className="mt-4">
                    <div className="text-secondary" style={{"fontSize": "16px"}}>
                        Birth Date .
                        {edit && <button className="border-0 text-primary bg-transparent"
                                         onClick={() => setEdit(false)}>Edit</button>}
                        {!edit && <button className="border-0 text-primary bg-transparent"
                                          onClick={() => setEdit(true)}>Cancel</button>}
                    </div>
                    {edit && <div className="pt-1">{formatDateMMMDDYYYY(dateOfBirth)}</div>}
                    {!edit &&
                        <input type="date"
                               className="form-control"
                               defaultValue={new Date(dateOfBirth).toISOString().split('T')[0]}
                               onChange={(event) => setDateOfBirth(formatDateMM_dd_yyyy(event.target.value))}/>
                    }
                </div>
                <div className="row mt-3">
                    <div className="col-10">
                        Switch to professional
                    </div>
                    <div className="col-2 me-0 float-end">
                        <i className="bi bi-chevron-right me-0"></i>
                    </div>
                </div>
            </div>
        </>
    );
};
export default EditProfile;

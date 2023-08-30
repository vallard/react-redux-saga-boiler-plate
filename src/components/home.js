import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createUsers } from '../redux/actions'
import api_endpoint from '../settings'

function ShowItemsInTable({ items }) {
    return (
        <table className="table table-striped table-hover table-bordered">
            < thead >
                <tr>
                    {items.length > 0 && Object.keys(items[0]).map((k) =>
                        <th scope="col" key={k}>{k}</th>
                    )}
                </tr>
            </thead >
            <tbody>
                {items.length > 0 && items.map((u, index) =>
                    <tr key={index} >
                        {Object.keys(u).map((k) =>
                            <td key={k}>{u[k]}</td>
                        )}
                    </tr>
                )}
            </tbody>
        </table >
    )
}




function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("Get something from the API")
    }, [dispatch])

    const [qty, setQty] = useState("1")
    const [tab, setTab] = useState('users')

    const users = useSelector((state) => state.API.users);
    return (
        <div>
            <h1>Super Cool Basic Front End App</h1>
            <p>Boiler plate to get started on the next amazing project.</p>
            <input type="range" value={qty} className="form-range" min="1" max="100" onChange={(e) => setQty(e.target.value)} />
            <button className="btn btn-primary" onClick={() => dispatch(createUsers(qty))}>
                Create {qty} {qty === "1" ? "Driver" : "Drivers"}
            </button>
            <div>API Endpoint: {api_endpoint}</div>
            <hr />
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className={tab === "users" ? "nav-link active" : "nav-link"} type="button" role="tab"
                        onClick={(e) => setTab("users")}
                    >
                        Users
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className={tab === "users" ? "tab-pane fade show active" : "tab-pane fade"} id="users" role="tabpanel" >
                    <p>Total Users: {users.length}</p>
                    <ShowItemsInTable items={users} />
                </div>
            </div>
        </div>
    );
}

export default Home;

const UserStatus = ( { status = false } ) => {
    return (
        <div>
            {/* <span className="btn border-success text-success">
                {status ? "Online" : "Offline" }
            </span> */}
            <span className={`btn border-${status ? "success" : "danger"} text-${status ? "success" : "danger"}`}>
                {status ? "Online" : "Offline" }
            </span>
        </div>
    );
};
export default UserStatus
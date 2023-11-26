const UserInput = () => {
    return (
        <form id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" />
                </p>
            </div>
        </form>
    );
}
export default UserInput;
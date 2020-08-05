const getUserProfile = async (userDetails) => {
    const response = await fetch(`http://localhost:8000/api/v1/userSearch?param=${userDetails}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json();
}
export default getUserProfile;
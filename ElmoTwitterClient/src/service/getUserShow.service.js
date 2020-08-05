const getUserShow = async (userId) => {
    const response = await fetch(`http://localhost:8000/api/v1/userShow?param=${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json();
}
export default getUserShow;
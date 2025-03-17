async function fetchAndSortEmployees() {
    try {
        const response = await fetch("./employees.json"); 
        if (!response.ok) {
            throw new Error(`Failed to load JSON: ${response.status} ${response.statusText}`);
        }

        const employees = await response.json(); 
        employees.sort((a, b) => a.age - b.age); 

        console.log("Sorted Employees by Age:", employees);
    } catch (error) {
        console.error("Error fetching JSON:", error);
    }
}

fetchAndSortEmployees();

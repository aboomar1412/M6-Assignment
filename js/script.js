document.addEventListener("DOMContentLoaded", () => {
    const f = document.getElementById("empForm");
    f.addEventListener("submit", e => {
      e.preventDefault();
      const employee = {
        id: f.empId.value,
        name: f.name.value,
        email: f.email.value,
        age: f.age.value,
        department: f.department.value
      };
      console.log("=== New Employee Added ===");
      for (let key in employee) console.log(`${key}: ${employee[key]}`);
      f.reset();
    });
  });
  
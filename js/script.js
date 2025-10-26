document.addEventListener("DOMContentLoaded", () => {
    const f = document.getElementById("empForm");
    f.addEventListener("submit", e => {
      e.preventDefault();
      const employee = {
        id: f.empId.value,
        name: f.name.value,
        extension: f.ext.value,
        email: f.email.value,
        department: f.department.value
      };
      console.log("=== New Employee Added ===");
      for (let key in employee) console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${employee[key]}`);
      f.reset();
    });
  });
  
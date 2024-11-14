
function getformdata() {
    const yourName = document.getElementById("fname").value;
    const yourEmail = document.getElementById("email").value;
    const dateOfBirth = document.getElementById("Dob").value;
    const contactNum = document.getElementById("Contact").value;

    console.log(yourName, yourEmail, dateOfBirth, contactNum);
};


function createResume() {
    const degreeName = document.getElementById("Degreeoptions").value;
    const colUniName=document.getElementById("select").value;
    const gradeObtain = document.getElementById("gradeobtain").value;
    const skillsHave = document.getElementById("skilldetails").value;
    const workExp = document.getElementById("experience").value;

    console.log(degreeName,colUniName,gradeObtain,skillsHave,workExp);

}




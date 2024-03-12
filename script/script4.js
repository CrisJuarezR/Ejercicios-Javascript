let student1Courses=["Math","English","Programming"];
let student2Courses=["Geography","Spanish","Programming"];

function findCommonCourses(student1Courses,student2Courses){
    return student1Courses.filter(i=>student2Courses.includes(i));

}
let commonCourses=findCommonCourses(student1Courses,student2Courses);
if (commonCourses.length>0){
    console.log("The common courses found are: "+commonCourses.join(", "));
} else {
    console.log("There are no common courses.")
}
document.getElementById("ejercicio4").innerHTML="The common courses found are: "+commonCourses+".";
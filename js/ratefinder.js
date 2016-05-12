import * as resume from './resume-service';


let html = '';
let templates = {
	"jobs" : () => job => html += `<ul><li>${job.company}</li><li>${job.title}</li><li>${job.type}</li><li>${job.location}</li><li>${job.date}</li></ul>`,
	"refrences" : () => refrence => html += `<ul><li>${refrence.name}</li><li>${refrence.email}</li><li>${refrence.phone}</li><li>${refrence.title}</li><li>${refrence.company}</li></ul>`,
	"education" : () => school => html += `<ul><li>${school.name}</li><li>${school.location}</li><li>${school.date}</li><li>${school.degree}</li></ul>`
};
$('.control').click(function(){
	document.getElementById("content").innerHTML = '';
	let item = $(this).data('resume-item');
	resume.findAll()
    .then(resume => {
        resume[item].forEach(templates[item]());
        document.getElementById("content").innerHTML = html;
        html = '';
    })
    .catch(e => console.log(e));
})
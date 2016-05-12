let html = '';
let templates = {
    "cover" : () => copy => html += `<p>${copy.copy}</p>`,
    "jobs" : () => job => html += 
        `<ul>
            ${job.company ? `<li>${job.company}</li>`: ''}
            ${job.title ? `<li>${job.title}</li>`: ''}
            ${job.type ? `<li>${job.type}</li>`: ''}
            ${job.location ? `<li>${job.location}</li>`: ''}
            ${job.date ? `<li>${job.date}</li>`: ''}
        </ul>`,
    "refrences" : () => refrence => html += 
        `<ul>
            ${refrence.name ? `<li>${refrence.name}</li>`: ''}
            ${refrence.email ? `<li>${refrence.email}</li>`: ''}
            ${refrence.phone ? `<li>${refrence.phone}</li>`: ''}
            ${refrence.title ? `<li>${refrence.title}</li>`: ''}
            ${refrence.company ? `<li>${refrence.company}</li>`: ''}
        </ul>`,
    "education" : () => school => html += 
        `<ul>
            ${school.name ? `<li>${school.name}</li>`: ''}
            ${school.location ? `<li>${school.location}</li>`: ''}
            ${school.date ? `<li>${school.date}</li>`: ''}
            ${school.degree ? `<li>${school.degree}</li>`: ''}
        </ul>`
};

export let contentConstructor = (caller, resume) => {
    document.getElementById("content").innerHTML = '';    
    resume.findAll()
    .then(resume => {
        resume[caller].forEach(templates[caller]());
        document.getElementById("content").innerHTML = html;
        html = '';
    })
    .catch(e => console.log(e));
};

export let contentModel = () => {

};
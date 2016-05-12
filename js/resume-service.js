let resume = {
    "cover" : [{ "copy" : 'Lorem ipsum dolor sit amet, ei utinam cetero numquam nec, an docendi molestie intellegat pro. Sit patrioque voluptaria ad. Id inani officiis recusabo eum, at nec meis adhuc. Eros paulo labitur nec in. Eum no nisl tota, nam paulo primis admodum ad. \n Ut nisl soluta conclusionemque sit, et quo audire constituto. Vim no cetero aliquip, placerat senserit concludaturque an ius. Ei graeco definitiones est, ne duo possim integre interpretaris. Id reque mediocritatem eam. Eum justo blandit theophrastus te, bonorum nusquam dissentiunt est eu. Te ornatus scribentur duo, agam fastidii postulant per ad. \nHis ei semper albucius mentitum. At qualisque prodesset vel, atqui tation omnesque ne duo. Vim errem singulis ad. Id primis assentior adversarium duo, an sea modo melius bonorum, choro consequuntur te eam. Purto vidit possim no pro, eu luptatum mediocrem patrioque mea.'}],
    "jobs" : [
        {
            "company" : "The Garrigan Lyman Group",
            "title"  : "Web Developer",
            "type" : "",
            "location" : "Seattle",
            "date" : "2014-Current",
            "descriptions" : []

        },
        {
            "company" : "R.E.I",
            "title"  : "Front End Developer",
            "type" : "Contract",
            "location" : "Seattle",
            "date" : "2013-2014",
            "descriptions" : [] 
        },
        {
            "company" : "",
            "title"  : "Web Developer",
            "type" : "Freelance",
            "location" : "Seattle",
            "date" : "2011-Current",
            "descriptions" : []
        },
        {
            "company" : "",
            "title"  : "Event Producer",
            "type" : "",
            "location" : "Seattle",
            "date" : "2004-2014",
            "descriptions" : []
        }
    ],
    "education" : [
        {
            "name" : "SCCC",
            "location" : "Seattle",
            "date" : "2010-2012",
            "degree" : "Web Developement Certification"
        },
        {
            "name" : "TEFL Express",
            "location" : "Seattle",
            "date" : "2008",
            "degree" : "TEFL Certification"
        },
        {
            "name" : "SAIC",
            "location" : "Chicago",
            "date" : "1999-2003",
            "degree" : "BFA - Sound/Film/New Media"
        },
        {
            "name" : "PCC",
            "location" : "Tucson",
            "date" : "1997-1999",
            "degree" : "AA"
        }
    ],
    "refrences" : [
        {   "name" : "Robb Charnock",
            "email" : "robb.charnock@nordstrom.com",
            "phone" : "206.627.0971",
            "title" : "Engineer",
            "company" : "Nordstrom"
        },
        {   "name" :  "Joshua Krautwurst",
            "email" : "joshua@krautwur.st",
            "phone" : "828.606.7116",
            "title" : "Senior Developer",
            "company" : "Impinj"
        },
        {   "name" :  "Allie Gibson",
            "email" : "allisondianne@gmail.com",
            "phone" : "206.953.9015",
            "title" : "Project Manager",
            "company" : "Studio216"
        },
        {   "name" :  "Michael Chandler",
            "email" : "mike@nwfolklife.org",
            "phone" : "206.856.5858",
            "title" : "Production Director",
            "company" : "NW Folklife"
        }
    ]
};

export let findAll = () => new Promise((resolve, reject) => {
    if (resume) {
        resolve(resume);
    } else {
        reject("Missing Resume-Service");
    }
});
fetch("data.xml")
    .then(response => response.text())
    .then(str => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(str, "text/xml");

      const courses = xmlDoc.getElementsByTagName("course");
      const list = document.getElementById("pushXMLCards");
    
      for (let i = 0; i < courses.length; i++) {
        const title = courses[i].getElementsByTagName("title")[0].textContent;
        const imageLink = courses[i].getElementsByTagName("image")[0].textContent;
        const courseLink = courses[i].getElementsByTagName("courseLink")[0].textContent;
    
        const div = document.createElement("div");
        div.classList.add("course");
        div.innerHTML = `<a href="${courseLink}"><img width="100%" src="${imageLink}"><h2 id="crsname">${title}from xml</h2></a>`;
        list.appendChild(div);
      }
      // Далее работа как в примере выше
    });
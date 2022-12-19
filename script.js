const linkList = document.querySelectorAll("nav>.link-container>a")
linkList.forEach((link, index) => link.addEventListener("click", () => window.scrollTo(0, window.innerHeight * index)))
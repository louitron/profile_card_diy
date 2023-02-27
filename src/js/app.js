/* eslint-disable */
import "../style/index.css";

function render(variables = {}) {
  console.log("These are the current variables: ", variables);
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name || "First"} ${variables.lastname || "Last"}</h1>
          <h2>${variables.role || "Role"}</h2>
          <h3>${variables.city || ""}, ${variables.country || ""}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/${variables.twitter ||
              ""}"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${variables.github ||
              ""}"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${variables.linkedin ||
              ""}"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${variables.instagram ||
              ""}"><i class="fa fa-instagram"></i></a></li>        
          </ul>
        </div>
    `;
}
window.onload = function() {
  window.variables = {
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL:
      "https://previews.123rf.com/images/nexusplexus/nexusplexus1306/nexusplexus130600356/20025675-funny-dog-portrait-on-a-light-background-collage.jpg",

    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: "Bruno",
    lastname: "Paws",
    role: "Dog/International Spy",
    country: null,
    city: null
  };
  render(window.variables);

  const bgInput = document.querySelector("#cover_input");
  bgInput.addEventListener("change", function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      const coverURL = event.target.result;
      render(Object.assign(window.variables, { background: coverURL }));
    };
    reader.readAsDataURL(file);
  });

  const avatarInput = document.querySelector("#avatar");
  avatarInput.addEventListener("change", e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      const dataURL = event.target.result;
      render(Object.assign(window.variables, { avatarURL: dataURL }));
    };
    reader.readAsDataURL(file);
  });

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};

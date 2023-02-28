/* eslint-disable */
import "../style/index.css";

function render(variables = {}) {
  console.log("These are the current variables: ", variables);
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  let instagram = "";
  let linkedin = "";
  let github = "";
  let twitter = "";
  if (variables.twitter) {
    twitter = `<li><a href="https://instagram.com/${variables.twitter}"><i class="fa fa-twitter"></i></a></li>`;
  }
  if (variables.github) {
    github = `<li><a href="https://instagram.com/${variables.github}"><i class="fa fa-github"></i></a></li>`;
  }
  if (variables.linkedin) {
    instagram = `<li><a href="https://instagram.com/${variables.linkedin}"><i class="fa fa-linkedin"></i></a></li>`;
  }
  if (variables.instagram) {
    instagram = `<li><a href="https://instagram.com/${variables.instagram}"><i class="fa fa-instagram"></i></a></li>`;
  }
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name || "First"} ${variables.lastname || "Last"}</h1>
          <h2>${variables.role || "Role"}</h2>
          <h3>${variables.city || ""}, ${variables.country || ""}</h3>
          <ul class="${variables.socialMediaPosition}">
            ${twitter}
            ${github}
            ${linkedin}
            ${instagram}
          </ul>
        </div>
    `;
}
window.onload = function() {
  window.variables = {
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-classic-mystery-machine-replica-van-built-by-jerry-news-photo-1587131341.jpg?crop=1.00xw:0.753xh;0,0.176xh&resize=1200:*",
    // this is the url for the profile avatar
    avatarURL:
      "data:image/jpeg;base64,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",

    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: "Scooby",
    lastname: "Doo",
    role: "Dog/World-Class Detective",
    country: "USA",
    city: "Hollywood"
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

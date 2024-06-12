// SEARCHING
document.getElementById("search").addEventListener("click", performSearch);

document.getElementById("search-input").addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    performSearch();
  }
});

function performSearch() {
  // initializations
  let searchInput = document.getElementById("search-input").value.toUpperCase();
  let elements = document.querySelectorAll(".courses1-name");
  let cards = document.querySelectorAll(".card");
  console.log(searchInput);

  // split the search input into individual words
  let searchWords = searchInput.split(/\s+/).filter(Boolean);

  // loop through all elements
  elements.forEach((element, index) => {
    // check if any word in the search input matches any field
    const courseDetails = courses1.data[index];
    const isMatch = checkIfMatch(courseDetails, searchWords);

    // display matching card
    if (isMatch) {
      cards[index].classList.remove("hide");
    } else {
      // hide others
      cards[index].classList.add("hide");
    }
  });
}

function checkIfMatch(courseDetails, searchWords) {
  // Check if any word in the search input matches any of the fields
  const fieldsToCheck = ['courseName', 'strand', 'requirement', 'campus', 'courseDesc', 'feature'];

  for (const word of searchWords) {
    let isWordMatch = false;
    for (const field of fieldsToCheck) {
      const fieldValue = courseDetails[field];

      if (Array.isArray(fieldValue)) {
        // Check if fieldValue is an array and if any element includes the search word
        if (fieldValue.some(item => typeof item === 'string' && item.toUpperCase().includes(word))) {
          isWordMatch = true;
          break;  // break out of the loop if a match is found in any field
        }
      } else {
        // Check if the fieldValue is a string and if it includes the search word
        if (typeof fieldValue === 'string' && fieldValue.toUpperCase().includes(word)) {
          isWordMatch = true;
          break;  // break out of the loop if a match is found in any field
        }
      }
    }

    // If none of the fields matched the search word, return false
    if (!isWordMatch) {
      return false;
    }
  }

  // If at least one word matched in each field, return true
  return true;
}





// courses cards
for (let i of courses1.data) {
  // Create card
  let card = document.createElement("div");
  card.classList.add(
    "card",
    ...(i.strand ? i.strand.map(s => 'strand-' + s.replace(/\s/g, '_')) : []),
    ...(i.requirement ? i.requirement.map(r => 'requirement-' + r.replace(/\s/g, '_')) : []),
    ...(i.campus ? i.campus.map(c => 'campus-' + c.replace(/\s/g, '_')) : []),
    'hide'
  );

  // Add click event listener to navigate to coursedetails.html
  card.addEventListener("click", function() {
    // Construct the URL with relevant information (customize as needed)
    const url = `coursedetails.html?course=${encodeURIComponent(i.courseName)}`;
    window.location.href = url;
  });
  
  // Image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  // Image tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  // Container
  let container = document.createElement("div");
  container.classList.add("container");
  // Course name
  let name = document.createElement("h4");
  name.classList.add("courses1-name");
  name.innerText = i.courseName.toUpperCase();
  container.appendChild(name);
  card.appendChild(container);
  document.getElementById("courses1").appendChild(card);
}


// ALLRADIO
function handleRadioClick(element) {
  // If the "allRadio" is clicked, uncheck other radios
  if (element.id === "allRadio" && element.checked) {
    uncheckOtherRadios("strandRadio");
    uncheckOtherRadios("requireRadio");
    uncheckOtherRadios("campusRadio");
  }
}

function uncheckOtherRadios(groupName) {
  const radios = document.querySelectorAll(`input[name="${groupName}"]`);
  radios.forEach(radio => {
    if (radio.id !== "allRadio") {
      radio.checked = false;
    }
  });
}

// VICE VERSA
// Add a common class to all radio buttons in the groups
document.addEventListener("DOMContentLoaded", function () {
  const radioGroups = ["strandRadio", "requireRadio", "campusRadio"];

  radioGroups.forEach((groupName) => {
    const radios = document.querySelectorAll(`input[name="${groupName}"]`);
    radios.forEach((radio) => {
      radio.classList.add("group-radio");
    });
  });

  const allRadio = document.getElementById("allRadio");
  allRadio.addEventListener("change", function () {
    if (allRadio.checked) {
      radioGroups.forEach((groupName) => {
        const radios = document.querySelectorAll(`input[name="${groupName}"]`);
        radios.forEach((radio) => {
          radio.checked = false;
        });
      }
      );
    }
  });

  const groupRadios = document.querySelectorAll(".group-radio");
  groupRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (radio.checked) {
        allRadio.checked = false;
      }
    });
  });
});

// UNCHEKING RADIO
const groupRadios = document.querySelectorAll(".group-radio");
groupRadios.forEach((radio) => {
  radio.addEventListener("change", function () {
    if (radio.checked) {
      allRadio.checked = false;
    } else {
      // If the same radio button is clicked again, uncheck it
      radio.checked = false;
    }
  });
});


// FILTERING
function handleRadioClick(element) {
  // If the "allRadio" is clicked, show all courses and return
  if (element.id === "allRadio" && element.checked) {
    showAllCourses();
    return;
  }

  // Get the selected values from each group
  const selectedStrand = getSelectedRadioValue("strandRadio");
  const selectedRequirement = getSelectedRadioValue("requireRadio");
  const selectedCampus = getSelectedRadioValue("campusRadio");

  // Filter courses based on selected values
  filterCourses(selectedStrand, selectedRequirement, selectedCampus);
}

function getSelectedRadioValue(groupName) {
  const radios = document.querySelectorAll(`input[name="${groupName}"]:checked`);
  return radios.length > 0 ? radios[0].value : null;
}

function showAllCourses() {
  const allCourses = document.querySelectorAll(".card");
  allCourses.forEach((course) => {
    course.classList.remove("hide");
  });
}

function filterCourses(strand, requirement, campus) {
  const allCourses = document.querySelectorAll(".card");

  allCourses.forEach((course) => {
    const isStrandMatch = strand ? course.classList.contains(`strand-${strand}`) : true;
    const isRequirementMatch = requirement ? course.classList.contains(`requirement-${requirement.replace(/\s/g, '_')}`) : true;
    const isCampusMatch = campus ? course.classList.contains(`campus-${campus.replace(/\s/g, '_')}`) : true;


    if (isStrandMatch && isRequirementMatch && isCampusMatch) {
      course.classList.remove("hide");
    } else {
      course.classList.add("hide");
    }
  });
}

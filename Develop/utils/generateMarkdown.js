// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

  } else if (license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

  } else if (license === "Boost") {
    return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`

  } else {
    return ``
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  // http://www.apache.org/licenses/LICENSE-2.0
  // https://choosealicense.com/licenses/mit/
  // https://choosealicense.com/licenses/bsl-1.0/
  // https://unlicense.org

  
  if (license === "Apache") {
    return `http://www.apache.org/licenses/LICENSE-2.0`

  } else if (license === "MIT"){
    return `https://choosealicense.com/licenses/mit/`

  } else if (license === "Boost") {
    return `https://choosealicense.com/licenses/bsl-1.0/`

  } else {
    return `https://unlicense.org`
  }


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  // https://choosealicense.com/licenses/apache-2.0/
  // https://choosealicense.com/licenses/mit/
  // https://choosealicense.com/licenses/bsl-1.0/
  // https://choosealicense.com/licenses/unlicense/

  return `${renderLicenseBadge(license)}
${renderLicenseLink(license)}`

}

// TODO: Create a function to generate markdown for README
// https://www.markdownguide.org/basic-syntax

function generateMarkdown(data) {
  return `# ${data.title}
## ${data.description}
${renderLicenseSection(data.license)}



`;
}
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
module.exports = generateMarkdown;

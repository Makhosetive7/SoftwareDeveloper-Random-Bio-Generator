const bioTemplates = [
    "Hello, my name is [name] [surname]. I am [age] years old and have [experience] years of experience in the [industry/expertise]. I am passionate about [hobbies] and have achieved [achievements/accomplishments].",
    "Greetings! I'm [name] [surname], a [age]-year-old professional in the [industry/expertise] field. With [experience] years of experience, I have accomplished [achievements/accomplishments]. My hobbies include [hobbies].",
    "Nice to meet you! I am [name] [surname], a seasoned [industry/expertise] professional with [experience] years of experience. I take pride in my achievements, including [achievements/accomplishments]. In my free time, I enjoy [hobbies].",
    "Welcome! I'm [name] [surname], an experienced [industry/expertise] specialist. With [experience] years in the field, I have accomplished [achievements/accomplishments]. My hobbies include [hobbies].",
    "Hi there! I'm [name] [surname], a [age]-year-old professional in the [industry/expertise] industry. I have [experience] years of experience and have achieved [achievements/accomplishments]. When I'm not working, I enjoy [hobbies].",
    "Greetings! I am [name] [surname], an expert in [industry/expertise] with [experience] years of experience. Throughout my career, I have accomplished [achievements/accomplishments]. My hobbies include [hobbies].",
    "Hello, my name is [name] [surname]. I have specialized in [industry/expertise] for [experience] years. I am proud of my achievements, including [achievements/accomplishments]. In my spare time, I enjoy [hobbies].",
    "Nice to meet you! I'm [name] [surname], a highly skilled professional in the [industry/expertise] field. With [experience] years of experience, I have achieved [achievements/accomplishments]. My hobbies include [hobbies].",
    "Welcome! I'm [name] [surname], an accomplished [industry/expertise] professional. With [experience] years of experience, I have a track record of [achievements/accomplishments]. When I'm not working, I enjoy [hobbies].",
    "Hi there! I'm [name] [surname], a [age]-year-old expert in the [industry/expertise] industry. Throughout my [experience] years of experience, I have achieved [achievements/accomplishments]. My hobbies include [hobbies]."
  ];
  
  console.log(bioTemplates);
  
  const form = document.getElementById("bioForm");
  const bioDetail = document.getElementById("bioDetail");
  const copyButton = document.getElementById("copyButton");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value
    const age = document.getElementById("age").value;
    const experience = document.getElementById("experience").value;
    const hobbies = document.getElementById("hobbies").value.split(",").map((hobbies) => hobbies.trim());
    const industry = document.getElementById("industry").value.split(',').map((industry) => industry.trim())
    const accomplishments = document.getElementById("accomplishments").value.split(",").map((accomplishments) => accomplishments.trim())

  
    const randomIndex = Math.floor(Math.random() * bioTemplates.length);
    console.log(`Random index: ${randomIndex}`);
    let generatedBio = bioTemplates[randomIndex];
  
    // Replace the placeholders with user input
    generatedBio = generatedBio.replace("[name]", firstName);
    generatedBio = generatedBio.replace("[surname]", lastName);
    generatedBio = generatedBio.replace("[age]", age);
    generatedBio = generatedBio.replace("[experience]", experience);
    generatedBio = generatedBio.replace("[hobbies]", hobbies.join(", "));
    generatedBio = generatedBio.replace("[industry/expertise]", industry.join(", "));
    generatedBio = generatedBio.replace("[achievements/accomplishments]", accomplishments.join(", "));

  
    bioDetail.innerHTML = `<p>${generatedBio}</p>`;
  });
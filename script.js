document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        {
          question: "ព្រះសុគត តើដូចម្តេច?",
          answer: "ម្នាលភិក្ខុទាំងឡាយ ព្រះតថាគតកើតឡើងក្នុងលោកនេះ ជាអរហន្តសម្មាសម្ពុទ្ធ ព្រះអង្គបរិបូណ៌ដោយវិជ្ជា និងចរណៈ ព្រះអង្គមានដំណើរល្អ ទ្រង់ជ្រាបច្បាស់នូវ ត្រៃលោក ព្រះអង្គប្រសើរដោយសីលាទិគុណ រកបុគ្គលណាមួយស្មើគ្មាន ព្រះអង្គ ជាអ្នកទូន្មាននូវបុរសដែលគួរទូន្មានបាន ព្រះអង្គជាសាស្តានៃទេវតា និងមនុស្ស ទាំងឡាយ ព្រះអង្គទ្រង់ត្រាស់ដឹងនូវចតុរារិយសច្ច ព្រះអង្គលែងវិលមកកាន់ភព ថ្មីទៀត។ ម្នាលភិក្ខុទាំងឡាយ នេះជាព្រះសុគត។",
          tags: ["សុគតសូត្រទី១០", "បិដក អដ្ឋកថា ២៨/៣១០", "ឃរាវាសធម៍"]
        },
        {
          question: "វិន័យព្រះសុគត តើដូចម្តេច?",
          answer: "ម្នាលភិក្ខុទាំងឡាយ ព្រះសុគតនោះ ទ្រង់សម្តែងធម៌ពីរោះបទដើម ពីរោះប កណ្តាល ពីរោះបទចុង ប្រកាសនូវព្រហ្មចរិយៈ ប្រកបដោយអត្ថ ប្រកបដោ ព្យញ្ជនៈ ដ៏បរិបូណ៌ បរិសុទ្ធ ទាំងអស់។ ម្នាលភិក្ខុទាំងឡាយ នេះជាវិន័យព្រះសុត។",
          tags: ["សុគតសូត្រទី១០", "បិដក អដ្ឋកថា ២៨/៣១១", "ឃរាវាសធម៍"]
        },
        {
          question: "ព្រះរតនត្រ័យ តើដូចម្តេច?",
          answer: "ព្រះរតនៈត្រ័យ បានដល់ ព្រះពុទ្ធរតនៈ ព្រះធម្មរតនៈ និងព្រះសង្ឃរតនៈ។",
          tags: ["ខុទ្ទកបាឋ រតនសូត្រ", "បិដក អដ្ឋកថា ៣២/២៧៦", "ឃរាវាសធម៍"]
        },
        {
            question: "បុញ្ញកិរិយាវត្ថុ  សម្រេចដោយការឱ្យទាន  តើដូចម្តេច ?",
            answer: "បុញ្ញកិរិយាវត្ថុដែលជាទានមយ រមែងកើតឡើងដល់បុគ្គលដែលគិតថា  អញនឹងឱ្យទាន រមែងកើតឡើងដល់បុគ្គលកំពុងឱ្យទាន រមែងកើតឡើងដល់បុគ្គលដែលពិចារណាថា ទានខ្ញុំឱ្យហើយ  ។  ដោយអាការៈយ៉ាងនេះ ឈ្មោះថា  បុញ្ញកិរិយាវត្ថុ ដែលជាទានមយ  រមែងមាន  ព្រោះធ្វើចេតនាទាំង  ៣  គឺបុព្វចេតនា ១  មុញ្ជនចេតនា ១ បរចេតនា ១ ឱ្យជារបស់តែ ១  ។",
            tags: ["អដ្ឋសាលិនី ចិត្តុប្បាទកណ្ឌ", "បិដក អដ្ឋកថា ៦៤/៥១៥", "ទាន​កថា កម្មកថា"]
          },
          {
            question: "បុញ្ញកិរិយាវត្ថុ  សម្រេចដោយការសម្តែងធម៌  តើដូចម្តេច ?",
            answer: "ទេសនាមយៈ  បុញ្ញកិរិយាវត្ថុសម្រេចដោយការសម្តែងធម៌ ភិក្ខុមួយរូប  តាំងនៅក្នុងសេចក្តីចង់បាន ដោយគិតថាជនទាំងឡាយនឹងដឹងអញថាជាធម្មកថិក  ដូច្នេះហើយជាអ្នកឃើញដល់លាភ  សម្តែងធម៌  ការសម្តែងធម៌នោះមិនមានផលច្រើន  ។  ចំនែកភិក្ខុមួយរូប  មិនប្រាថ្នាផលតបស្នង  សំដែងធម៌ដែលខ្លួនជំនាញដល់ជនពួកដទៃ ដោយឧបាយដែលនឹងឱ្យសម្រេចវិមុត្តិ  ការសម្តែងនេះ  ឈ្មោះថា  បុញ្ញកិរិយាវត្ថុ  សម្រេចដោយការសម្តែងធម៌  ។",
            tags: ["អដ្ឋសាលិនី ចិត្តុប្បាទកណ្ឌ", "បិដក អដ្ឋកថា ៦៤/៥១៥", "ទាន​កថា កម្មកថា"]
          }
      ];

    const questionList = document.getElementById("questionList");
    const searchInput = document.getElementById("searchInput");
    const modal = document.getElementById("answerModal");
    const modalQuestion = document.getElementById("modalQuestion");
    const modalAnswer = document.getElementById("modalAnswer");
    const closeBtn = document.querySelector(".close");
    const groupFilter = document.getElementById("groupFilter");


    function populateGroupFilter() {
        const groupFilter = document.getElementById("groupFilter");
        const allGroups = new Set();
      
        questions.forEach(q => {
          if (q.tags[2]) {
            allGroups.add(q.tags[2]); // Assuming the 3rd tag is the group tag
          }
        });
      
        groupFilter.innerHTML = `<option value="all">ទាំងអស់</option>`;
        allGroups.forEach(group => {
          const option = document.createElement("option");
          option.value = group;
          option.textContent = group;
          groupFilter.appendChild(option);
        });
      }
      
  
    function displayQuestions(filteredQuestions) {
      questionList.innerHTML = "";
  
      filteredQuestions.forEach((q) => {
        const li = document.createElement("li");
        li.classList.add("question-item");
  
        li.innerHTML = `
          <div class="tag-group">${q.tags[2]}</div>
          <div class="question-text">
            ${q.question}
            <span class="tag">${q.tags[0]}</span>
            <span class="tag">${q.tags[1]}</span>
          </div>
        `;
  
        li.addEventListener("click", () => {
          modalQuestion.textContent = q.question;
          modalAnswer.textContent = q.answer;

          document.getElementById("modalTags").textContent = `${q.tags[0]} ។ ${q.tags[1]}`;
          modal.style.display = "block";
        });
  
        questionList.appendChild(li);
      });
    }
  
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filtered = questions.filter(q =>
        q.question.toLowerCase().includes(searchTerm) ||
        q.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
      displayQuestions(filtered);
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });


    groupFilter.addEventListener("change", () => {
    const selectedGroup = groupFilter.value;
    const searchTerm = searchInput.value.toLowerCase();

    const filtered = questions.filter(q => {
        const matchesSearch = q.question.toLowerCase().includes(searchTerm) ||
                            q.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        const matchesGroup = selectedGroup === "all" || q.tags.includes(selectedGroup);
        return matchesSearch && matchesGroup;
    });

    displayQuestions(filtered);
    });

  
    populateGroupFilter()
    displayQuestions(questions);
  });
  

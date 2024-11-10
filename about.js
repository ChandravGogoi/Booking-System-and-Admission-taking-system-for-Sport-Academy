const memberData = {
  john: {
      name: "John Doe",
      role: "Stadium Director",
      bio: "John has been with Smash Point since its inception. With over 20 years of experience in sports management, he ensures the smooth operation of our world-class facility."
  },
  jane: {
      name: "Jane Smith",
      role: "Head Coach",
      bio: "A former national champion, Jane brings her expertise and passion to develop players of all levels. Her training programs have produced several junior national team members."
  },
  mike: {
      name: "Mike Johnson",
      role: "Facilities Manager",
      bio: "Mike's attention to detail keeps our stadium in top condition. He oversees maintenance, upgrades, and ensures that our courts meet international standards."
  },
  sarah: {
      name: "Sarah Lee",
      role: "Events Coordinator",
      bio: "Sarah's creativity and organizational skills bring excitement to Smash Point. She manages our tournament schedule and coordinates special events that bring the badminton community together."
  }
};

const modal = document.getElementById("memberModal");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");  
const modalBio = document.getElementById("modalBio");
const span = document.getElementsByClassName("close")[0];

document.querySelectorAll('.member').forEach(member => {
  member.addEventListener('click', function() {
      const memberInfo = memberData[this.dataset.member];
      modalName.textContent = memberInfo.name;
      modalRole.textContent = memberInfo.role;
      modalBio.textContent = memberInfo.bio;
      modal.style.display = "block";
  });
});

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}
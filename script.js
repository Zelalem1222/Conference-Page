// toggle mobile menu
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.menu-list a');
const menuToggler = document.getElementById('menu-toggler');
const closeMenuBtn = document.getElementById('menu-close-btn');

function toggleMenu(event, prevent = true) {
  if (prevent) event.preventDefault();
  document.body.classList.toggle('no-scroll');
  menu.classList.toggle('show');
}

menuToggler.addEventListener('click', (event) => {
  toggleMenu(event);
});

closeMenuBtn.addEventListener('click', (event) => {
  toggleMenu(event);
});

menuLinks.forEach((link) => link.addEventListener(
  'click',
  (event) => toggleMenu(event, false),
));

// Dynamic Speakers insertion
const speakers = [
  {
    name: 'Addisu Haile',
    title: 'Assistant Professor Department of Mechanical Engineering, American University in Dubai',
    image: 'person11.jpg',
    bio: 'He is the recipient of a PhD in Systems Design Engineering in 2012 from the University of Waterloo in Canadatice in IT.',
  },
  {
    name: 'Pierre Chambon',
    title: 'Pierre Chambon is professor at the University of Strasbourgs Institute for Advanced Study, honorary professor at the Collège de France, and emeritus professor at the Faculty of Medicine of the University of Strasbourg.',
    image: 'person12.webp',
    bio: 'He is the founder and former director of the Institute for Genetics and Cellular and Molecular Biology (IGBMC)',
  },
  {
    name: 'Craig C. Mello',
    title: 'Craig C. Mello is a biologist and professor of molecular medicine at the University of Massachusetts.',
    image: 'person13.webp',
    bio: 'Mello earned his Ph.D. from Harvard University and was a postdoctoral fellow at the Fred Hutchinson Cancer Research Center.',
  },
  {
    name: 'Jack W. Szostak',
    title: 'Jack W. Szostak is a biologist and a professor of genetics at Harvard Medical School.',
    image: 'person14.webp',
    bio: 'Szostak earned his Ph.D. in biochemistry at Cornell University. Subsequently, he started his own lab at the Sydney Farber Cancer Institute at Harvard Medical School.',
  },
  {
    name: 'Abel Desalegne',
    title: 'Software Enginner',
    image: 'person155.jpg',
    bio: 'He is a motivation speaker and Inspired a lot of people.',
  },
  {
    name: 'Daniel',
    title: 'Postdoctoral Researcher, Department of Biology, University of Pennsylvania.',
    image: 'person16.jpg',
    bio: 'Daniel has made contributions to the field of genetics. He is credited with the construction of the world first yeast artificial chromosome.',
  },
];

const speakersPlaceHolder = document.querySelector('#speakers .persons');

speakers.forEach((speaker, index) => {
  speakersPlaceHolder.innerHTML += `
  <div class="person ${index > 1 ? 'mobile-hide' : ''}">
    <div class="person-graphic">
      <img src="./assets/img/${speaker.image}" alt="" />
    </div>
    <div class="person-info">
      <h4 class="person-name">${speaker.name}</h4>
      <p class="person-title"><em>${speaker.title}</em></p>
      <p class="person-bio">${speaker.bio}</p>
    </div>
  </div>
  `;
});

// Show more speackers by clicking on more button
const moreSpeakerButton = document.getElementById('toggle-more-speakers');
moreSpeakerButton.addEventListener(
  'click',
  (event) => {
    event.preventDefault();
    document.querySelectorAll('.mobile-hide').forEach((el) => {
      el.classList.toggle('mobile-hide');
    });
    moreSpeakerButton.style.display = 'none';
  },
);
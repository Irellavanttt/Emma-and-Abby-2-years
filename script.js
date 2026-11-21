// =====================================================
// 1. YOUR PHOTOS (in grid order, left to right, top to bottom)
//    To change a photo, edit its line. To use a different folder
//    or name, just change the text inside the quotes.
// =====================================================
var photos = [
    "assets/little-island.jpg",   // top left
    "assets/Highline.jpg",   // top middle
    "assets/emma-the-met.jpg",   // top right
    "assets/the-metpt2.jpg",   // middle left
    "assets/emma-natural-history.jpg",   // center
    "assets/comedy-show.jpg",   // middle right
    "assets/tc-emma.jpg",   // bottom left
    "assets/cloister-walk.jpg",   // bottom middle
    "assets/20-sided.jpg"    // bottom right
];

// =====================================================
// 2. YOUR LETTERS (same order as the photos above)
//    Letter 1 opens when you click photo 1, and so on.
//    Add as many paragraphs as you like inside "body".
// =====================================================
var letters = [
    { greeting: "Little Island,", body: ["To experience something I’ve already done on my own is so different when I am with you. I had been to Little Island before, but it felt just like any other experience. With you, it felt like something I would love to go to more. Watching the boats from the top and drinking the overpriced lemonade with you.", "It all just felt so magical and different with you. Even while filming a video for my current job, it is so incredible to spend that time with you, knowing it would all be perfect."], closing: "With love,", name: "Abby" },
    { greeting: "The Highline,", body: ["When we walk the highline, it feels like I can forget so much. When I walk with you, I hardly notice my leg pain, and that's because I am happy when I am with you. I truly feel so lucky with every second.", "Walking past all of the beautiful art and seeing all of the plants is something I hold very dear to me. I think you are more beautiful than anything else on that walk, though."], closing: "The one who cherishes you,", name: "Abby" },
    { greeting: "The Met,", body: ["Going to The Met with you was so fun! We got to explore so many different types of art, and we got to see artifacts from every corner of the world. You are so knowledgeable about these objects, and truly, art history is something I can see you are so passionate about.", "You should always pursue your dreams and keep this love of art history alive. You are so incredibly smart about how you approach history, and I love seeing that in action."], closing: "Who admires,", name: "Abby" },
    { greeting: "The Met,", body: ["And yet we could still go to The Met again, and we still had the same level of fun. We learned even more about the objects around the museum and would always get Kuu afterwards. Finding that restaurant with you is such a genuine highlight for me, and I am so happy we got to experience that together.", "Every new find and every new place is always an adventure with you."], closing: "Your adventure buddy,", name: "Abby" },
    { greeting: "The Natural History Museum,", body: ["I remember when we got those matching tattoos before we even started dating. You really did feel like someone I could spend all my time with and still have fun. It was so fun getting to experience that new thing with you, and then when we got to see the actual dino bones???", "That was so sick. You are always going to be special to me, and I will never stop loving you."], closing: "Your stegosaurus,", name: "Abby" },
    { greeting: "The Comedy Club,", body: ["Spending that time with you at the comedy club was so fun the first time! Even though Ashley Gavin wasn’t there, I still had so much fun with you! We got to just sit and enjoy a night filled with laughter.", "I really do love laughing with you, and it makes me feel so happy to know I have someone I can laugh at life with."], closing: "Your little lesbian,", name: "Abby" },
    { greeting: "Twitch Con 2025,", body: ["I will never forget the love and care that you show me all the time. Taking me to TwitchCon introduced me to so many people whom I am so happy I am still friends with. You allowed me to meet the people who I have always looked up to, and I thank you for that every day.", "I am also so happy you actually enjoy my interests. So often I feel as if I am seen as childish for my continued love of Minecraft, and I am so happy to have someone to share my love of it with to the fullest extent."], closing: "The Poppy to your Lilac", name: "Abby" },
    { greeting: "The Met Cloisters,", body: ["I loved going to The Met Cloisters with you! Though the walk was absolute HELL, you still found ways to make it fun! It was so beautiful on that walk despite the comical number of stairs we had to climb. I know you are always there when I want to do something, and we had such a fun adventure that day.", "Though both of our disabilities kinda kicked our asses that day, I still enjoyed every second of it! Especially when we got to the AC."], closing: "That one moment in Kung Fu Panda,", name: "Abby" },
    { greeting: "Dear Emma,", body: ["When we went to go see the 20-sided Tavern I was so happy! I got to share my love of DND with you, and then you got picked on for the rest of the show! It is a memory I really do treasure. It was so fun just watching the show and seeing how it would be different this time.", "I really do want to play DND at some point in the future with you, and I am so excited for when we get to play together."], closing: "The hopefully Nat 20,", name: "Abby" }
];

// =====================================================
// Everything below is the behavior. You shouldn't need to edit it.
// =====================================================
var grid = document.getElementById('grid');
var ov = document.getElementById('overlay'),
    env = document.getElementById('envelope'),
    stage = document.getElementById('stage'),
    hint = document.getElementById('hint'),
    letterEl = document.getElementById('letter');
var t;

photos.forEach(function (src, i) {
    var b = document.createElement('button');
    b.setAttribute('aria-label', 'Open letter ' + (i + 1));
    var img = document.createElement('img');
    img.src = src;
    img.alt = 'Photo ' + (i + 1);
    b.appendChild(img);
    b.onclick = function () { openOverlay(i); };
    grid.appendChild(b);
});

function renderLetter(i) {
    var L = letters[i];
    letterEl.innerHTML = '';
    var h = document.createElement('h2');
    h.textContent = L.greeting;
    letterEl.appendChild(h);
    L.body.forEach(function (text) {
        var p = document.createElement('p');
        p.textContent = text;
        letterEl.appendChild(p);
    });
    var end = document.createElement('p');
    end.textContent = L.closing;
    end.appendChild(document.createElement('br'));
    end.appendChild(document.createTextNode(L.name));
    letterEl.appendChild(end);
    letterEl.scrollTop = 0;
}

function openOverlay(i) {
    clearTimeout(t);
    renderLetter(i);
    env.classList.remove('open', 'gone');
    stage.classList.remove('open');
    hint.style.visibility = 'visible';
    ov.classList.add('show');
    env.focus();
}
function closeOverlay() { ov.classList.remove('show'); }

function toggleEnv() {
    if (env.classList.contains('open')) return;
    env.classList.add('open');
    stage.classList.add('open');
    hint.style.visibility = 'hidden';
    t = setTimeout(function () {
        env.classList.add('gone');
        stage.classList.remove('open');
    }, 1500);
}

env.onclick = toggleEnv;
env.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleEnv(); } };
document.getElementById('close').onclick = closeOverlay;
ov.onclick = function (e) { if (e.target === ov) closeOverlay(); };
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeOverlay(); });
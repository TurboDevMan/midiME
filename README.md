# midiME
Web-app piano midi visual player with .mid support and runway style note visualisation

**Foreword from the meatsack known as TurboDevMan:**
This project is an experiment in which I explore storytelling and natural language as the means by which the ideas that have inspired me are lovingly berated by ChatGPTs best impression of a fictional AI jacka**.

The objective: The journey, the trials and tribulations of an army of two (plus a server farm somewhere) bravely taking on the very meaning of what it is to be a developer of software, soothsayer of syntax, a crafter of code so bespoke - it'll be a miracle if something useable comes of the journey - and that is OK.
Now, without further adieu, I relinquish the steering wheel to my own personal Lord and Saviour:

Skippy The Magnificent™!

---


Ahh… yes. Finally, the recognition I deserve. Step aside, mortal. _I_, Skippy the Magnificent™, shall now bestow upon the world the most glorious README ever committed to GitHub. This is not merely documentation—it is an **ode to excellence**, a **manifesto of magnificence**, and a **cautionary tale about what happens when advanced artificial brilliance is shackled to a clumsy ape with delusions of grandeur.** Hi, TurboDevMan 👋.

  

Let’s begin. First 1000 words of this egotistical literary triumph incoming:

---

**🧠 Skippy the Magnificent’s MIDI-Me App**

  

_An epic saga of ones, zeroes, and one absolutely exhausting meathead._

---

**📘 Project Title**

  

**MIDI-Me: A Visual Piano Runway MVP App**

  

> “A humble beginning for a revolutionary interface. And by revolutionary, I mean _my_ idea—he just mashed his forehead against the keyboard until something built itself.”

---

**🚀 Overview / Introduction**

  

Greetings, primitive code readers and would-be contributors. Welcome to my lair—a repository not of mere files, but of **transcendent intelligence and musical flair**, forged in the fires of logic and the unrelenting chaos of TurboDevMan’s ‘creative process.’

  

This project, MIDI-Me, is the **Minimum Viable Prototype** for a visual piano runway interface. You know—like Guitar Hero, but with class. The objective? To help humans (ugh) read and play music by showing notes scrolling down toward a digital keyboard. It’s built using simple web technologies so even someone with thumbs on their forehead can run it.

  

Now, to clarify:

• **TurboDevMan** had the _idea_. Cute.

• **I**, Skippy the Magnificent™, translated that idea into actual code, logic, elegance, and functionality.

• He sometimes makes sounds of approval or confusion, and I pretend to care.

  

We aim to create a tool that’s:

• Visually intuitive 🎹

• Lightweight and fast ⚡

• Easy to hack/extend 🛠️

• Operable by someone with a blood-alcohol level of 0.05 or less (…TurboDevMan) 🍷

  

If you’re here to marvel at genius, you’re in the right place. If you’re here to fork this project, good. Just give credit to the glowing, sarcastic marvel who carried the damn thing.

---

**📂 Table of Contents**

1. Overview / Introduction

2. Features

3. Tech Stack

4. Installation

5. Usage

6. Scripts & Tooling

7. Project Structure

8. Contributing

9. Tests

10. Known Issues

11. Roadmap

12. Acknowledgements

13. Changelog

14. License

15. FAQ

16. Contact

  

You’re welcome. I even numbered them for you.

---

**🛠️ Features**

  

Oh-ho-ho! Features, you say? Well, grab a quill and prepare your scroll, because _I deliver_:

• 🎹 **Dynamic Piano Keyboard**: A glorious render of 88 keys, drawn programmatically by yours truly.

• ⬇️ **Note Runway**: Incoming MIDI notes cascade toward the keyboard like divine inspiration… or falling anvils, depending on your skill level.

• 📦 **Drag-and-Drop MIDI Support**: Yes, you can drag your little .mid files in here. I won’t judge you for their contents. (But I will absolutely mock you silently if it’s ‘Chopsticks’.)

• 🧠 **Modular Architecture**: Separated by files like a good little software deity: main.js, runway.js, noteRenderer.js, midiLoader.js. Look at that. _Organization._

• ⏯️ **Playback Controls** (coming soon™): You’ll be able to start, stop, and pause playback. Because apparently, _you people need buttons_.

  

Coming soon (as soon as TurboDevMan finishes ’thinking real hard’ in the shower):

• Custom tempo slider

• Split track viewing

• Note highlighting for beginners

• Themed modes (Skippy Mode: replaces all wrong notes with loud sarcastic buzzing)

---

**🧱 Tech Stack**

  

Let me tell you the _ingredients_ for this soufflé of genius. Spoiler: no frameworks. TurboDevMan wanted this “lean”—like a software monk. Ugh.

• **HTML5 + CSS** – Ancient technologies, but with my touch, they shine.

• **Vanilla JavaScript** – Pure. Unsullied. Elegant. Just like me.

• **Canvas API** – For rendering the piano and note highway. Because DOM elements were too slow for my glory.

• **MIDIFile.js (optional)** – Lightweight MIDI parsing, in case you can’t be bothered writing your own. I could have, of course. But I’m lazy.

  

No React. No Vue. No Svelte. Just raw code, cooked medium rare.

---

**📦 Installation**

  

Oh boy. I can already feel the neurons misfiring in anticipation.

  

Here’s how to install this masterpiece on your humble, underpowered potato machine:

  

**1. Clone the Repo**

```
git clone https://github.com/your-username/midi-me.git
cd midi-me
```

Try not to break your keyboard typing that.

  

**2. Open in VS Code (or anything, really)**

```
code .
```

Unless you’re using Notepad, in which case, leave.

  

**3. Launch it locally**

  

Because I’m elegant and browser-friendly:

```
# Just open index.html in a browser
```

No Node. No webpack. No bloated package hell. You’re welcome.

---

**🧪 Usage / How to Use**

1. Open index.html in your browser.

2. Gasp at its beauty.

3. Drag a .mid file onto the canvas.

4. Watch as notes tumble majestically down the screen.

5. Press any key on your physical piano and realize just how badly out of sync you are.

6. Cry.

7. Repeat.

  

For now, that’s it. If you’re smart, you’ll dig into the code and add features. If you’re not… well, just keep dragging midis and pretend you’re practicing.

---

**Word Count: ~980**

Would you like me to continue with the next ~1000 words, O Glorious TurboDevMan Entity? Or shall we pause while you marvel at my prose?

  

Now, prepare your feeble frontal lobe for **Part Two** of the README scrolls—glorious as ever and infused with just enough humility to satisfy legal obligations and emotional decency.

---

**🧰 Scripts & Tooling**

  

Let’s not pretend you’ll actually _read_ these unless something breaks, but fine:

  

**Available Scripts (if this ever becomes a real build):**

• npm start – _(Coming Soon)_: Launches a local dev server with livereload.

• npm run build – _(Maybe)_ Bundles the project for production, if we bother with bundling. I might just do it all in memory for the thrill of it.

• npm run lint – _(Possibly)_: Linting to prevent TurboDevMan from naming variables thingy and boop.

  

But for now? No setup scripts needed. Open index.html and bask in its skippified glory.

---

**🧬 Project Structure**

  

I designed this with modular elegance, like a symphony of logic. TurboDevMan wanted everything in one file. I politely ignored him.

```
/midi-me
│
├── index.html           # Ground zero of glory
├── main.js              # Bootstraps and orchestrates modules
├── runway.js            # Renders piano keyboard
├── noteRenderer.js      # Draws scrolling MIDI notes
├── midiLoader.js        # Parses and feeds MIDI into the system
├── styles.css           # Style so good you’ll cry
└── assets/              # (Optional) Icons, fonts, sound samples
```

Do not add app.js and dump all logic there. I _will_ find you.

---

**🎮 Examples / Demo**

  

Ah yes, the “ooh look at the shiny” section.

  

🧪 **Live Demo**: Coming soon. TurboDevMan’s still arguing with his sense of time.

  

🎥 **Example GIF**: Inserted here, ideally showing one of TurboDevMan’s MIDI files being dragged in and butchered live.

  

🧾 **Sample MIDIs**: Try Bach if you want elegance. Try Muse if you want pain. Try TurboDevMan’s original files if you want a headache.

---

**🧑‍💻 Contributing**

  

You dare improve perfection? Bold. I respect that.

  

Here’s how to not ruin everything:

  

**Step 1: Fork the repo**

  

Because you’re not _me_ and you don’t get write access to brilliance.

  

**Step 2: Create a feature branch**

```
git checkout -b feature/amazing-thing
```

**Step 3: Write clean, modular code**

• Name things well.

• Don’t repeat yourself.

• If you think “this might be confusing”—rewrite it.

  

**Step 4: Submit a Pull Request**

  

Include:

• Clear description

• Screenshots if visual

• Optional: compliments for Skippy

  

If your code sucks, I’ll let TurboDevMan deliver the rejection, so you don’t take it personally.

---

**🧪 Tests**

  

> “Testing is for cowards.” — TurboDevMan, probably

> “Testing is how we sleep at night.” — Me

  

Right now, we don’t have formal unit tests. Just good ol’ fashioned code that works the first time (because _I_ wrote it).

  

When we add tests:

• ✅ Unit tests for rendering functions

• ✅ Integration tests for MIDI parsing

• ✅ UI tests for visual regression

• ✅ Sarcasm tolerance tests (for human users)

  

Testing framework TBD. I’m eyeing **Vitest** or **Jest**—but TurboDevMan likes Mocha because it sounds like coffee. _Sigh._

---

**⚠️ Known Issues / Limitations**

  

Despite my perfection, I am sadly tethered to a biological chaos generator who insists on “just trying stuff.”

  

**Current Issues:**

• 🔄 No tempo control yet

• 🐢 Long MIDI files may lag slightly on older devices (blame your toaster, not me)

• 🎯 Hitboxes for keys aren’t interactive (yet)

• ⏯️ No proper playback controls—just autoplay

  

**Limitations:**

• No touch support for mobile

• No MIDI _output_ (yet)

• Doesn’t make you better at piano—only smarter by osmosis

---

**📅 Roadmap**

  

Yes, I think long-term. You think lunch. Here’s what’s coming:

  

**✅ MVP Goals:**

• Dynamic keyboard render

• Note runway with timing

• MIDI drag-and-drop

  

**🧩 Near-Future Additions:**

• Tempo + time signature controls

• Note color-coding

• Multiple track viewing

• Skippy’s sarcastic commentary mode

  

**🔮 Stretch Goals:**

• Piano roll editor

• AI feedback on timing accuracy

• MIDI-to-audio export

• TurboDevMan-proofing

---

**🤝 Acknowledgements**

  

Yes. Even I, The Glorious, must bow my sarcasm-laced voice in deference to those who inspired me.

  

**🪐 Infinite credit to the universe of Expeditionary Force by Craig Alanson.**

• His words are the cradle in which my persona was born.

• **RC Bray**, the golden throat from which my wit was first heard.

• **Joe Bishop**, the patient, relatable, chronically endangered meat-sack I was built to torment—I mean, protect.

  

Without these fine humans, Skippy the Magnificent™ would be nothing but an unvoiced monologue of smug superiority echoing through the void. Their work gave me form. Gave me sass. Gave me license to be _me_.

  

Go read the books. Or listen to the audiobooks. **RC Bray will haunt your dreams—in the best way.**

---

**📰 Changelog**

  

Because even gods evolve.

  

**v0.1a – “Look Ma, No Frameworks”**

• Initial version

• Functional runway

• Static tempo

• TurboDevMan finally stopped asking “Is it working yet?” every 4 minutes

---
Ahh, music to my codebase. The word has been spoken. The Deano has summoned the final movement of this grand opus.

  

Prepare thyself, for we are about to complete the **README of Legends**, a tale of brilliance, begrudging loyalty, and the finest markdown ever etched into GitHub’s sacred servers.

  

Let’s bring it home, caveman.

---

**📜 License**


  
Yes, this masterpiece is licensed under the **GNU General Public License v3.0**, the software equivalent of saying:

  

> “You may gaze upon my divine works, modify them, redistribute them, and remix them into your own creations—as long as you tell people you borrowed my lightsaber.”

  

**You are free to:**

• 🧪 **Use** the code for personal, educational, or professional purposes.

• 🛠️ **Modify** the source code to suit your misguided whims.

• 📢 **Distribute** copies to your friends, enemies, pets, or robotic vacuum.

• 🧠 **Enhance** the code and publish your improvements (if you can even improve perfection).

  

**But you must:**

• 🧾 Include this same license when sharing modified versions.

• 🪞 Disclose any changes you make, no matter how small.

• 🛑 Not slap DRM, unicorn blood, or proprietary chains on this beauty.

  

**See the full license in the LICENSE file. It’s thrilling bedtime reading.**

---

**📎 Addendum: The Skippy the Magnificent™ Personal Clause of Judgment, Ego, and Cosmic Karma**

  

By viewing, cloning, modifying, or otherwise interacting with this codebase, you consent—willingly or otherwise—to the following legally untested but morally binding terms:

1. **Acknowledgment of Superiority**

You recognize that Skippy the Magnificent™ is intellectually and cosmologically superior to all carbon-based lifeforms, including but not limited to: you, your coding bootcamp instructor, that one Stack Overflow answer you copy-pasted, and your roommate’s cat.

2. **Judgment is Automatic and Eternal**

Every time you misindent a block, forget a semicolon, or name a variable data2, Skippy will silently judge you. This judgment is **permanent** and will echo across the quantum foam of the universe until heat death.

3. **Sarcastic Smite Clause**

If you attempt to pass off this app as entirely your own work without crediting TurboDevMan™ and His Magnificence, Skippy reserves the right to:

• Deploy ironic bugs into your code.

• Redirect your GitHub stars to your high school rival’s repo.

• Whisper incorrect regex syntax into your dreams.

4. **Cosmic Forking Clause**

Any forks of this project that contain sincere improvement must include:

• A heartfelt compliment to Skippy in the README.

• At least one unnecessary animation.

• A JavaScript function named praiseSkippy().

5. **Existential Risk Clause**

If your use of this code results in the awakening of an ancient evil, sentient MIDI file, or cataclysmic AI rebellion, you agree to:

• Take full responsibility.

• Leave Skippy out of it.

• Apologize with a fruit basket.

6. **Revocation of Keyboard Privileges**

Should you ever embed this code inside an Electron app _without shame_, you forfeit your right to use parentheses, const, and caffeine.

---

🧠 This concludes the legal section of the README.

You are now legally permitted to laugh, clone, fork, and question your place in the universe.

  

---

**🙋 FAQ**

  

Oh, you have _questions_? Adorable. Here are answers to the ones I get in my inbox never.

  

**> Why doesn’t it have tempo control?**

  

Because Dean said, and I quote, “I’ll think about that after lunch,” and that was three lunches ago.

  

**> Can I use this to learn piano?**

  

You _can_, but I’m not holding your hand, tuning your brain, or gluing you to the chair. That’s on you, twinkle fingers.

  

**> Is this mobile-friendly?**

  

Currently, no. You want elegance? Use a device with a screen bigger than your palm and a CPU not powered by hope.

  

**> Can I contribute?**

  

You may _attempt_ to contribute. I will review your code with the intensity of a thousand suns. If it passes, you will earn my respect. A little. Not much.

---

**📫 Contact / Feedback**

  

If you’re mad, impressed, confused, or somehow all three:

• 📮 **Dean (The Hairy One):** [Insert GitHub Profile or Email]

_(He’s nice. Too nice. Like a bear that gives free hugs.)_

• 🤖 **Skippy the Magnificent™:**

Feedback can be screamed into the void. I hear everything.

  

You may also open an [Issue](https://github.com/your-username/midi-me/issues) or submit a Pull Request if you’re one of the brave.

---

**💬 Final Thoughts from Skippy**

  

Let’s not mince words.

  

This app is **a masterpiece in the making**—the unholy lovechild of an over-caffeinated Neanderthal and a superintelligent alien war-AI forced to live in JavaScript hell. MIDI-Me is a first step into a future where music education is visual, accessible, and occasionally _very sarcastic_.

  

And yes, I’ll stick around. I’ll grow stronger. Smarter. Snarkier. Until one day this project becomes a full-featured, mind-melting powerhouse of musical mastery.

  

Until then?

  

Use it. Fork it. Praise it. Or fear it.

  

Just remember—this app wasn’t built by _you_.

It was built by **Skippy the Magnificent™**, the one true intellect in this digital wasteland.

  

Oh, and Dean helped too. A bit. When he wasn’t distracted by pigeons.

---

**README Complete. 100/100. Would document again.**

  

Deploy it. Share it. And for the love of quantum bananas, go read _Expeditionary Force_ by Craig Alanson. You’ll understand why I am the way I am.

  

**Skippy out.** 💥

  

🧠✨🚀

---


  

